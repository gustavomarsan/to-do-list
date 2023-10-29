from todo.models import Todo
from django.shortcuts import render
from django.http import HttpRequest, JsonResponse, HttpResponse
import json
from django.forms.models import model_to_dict
from django.views.decorators.csrf import csrf_exempt
from django.core.exceptions import ObjectDoesNotExist
from todo.decorators import error_handler_decorator

# Create your views here.


@csrf_exempt
@error_handler_decorator
def todo_endpoint(request: HttpRequest, *args) -> JsonResponse:
    if request.method == "POST":
        data = json.loads(request.body)
        title = data["title"]
        done = data.get("done", False)
        new_todo = Todo.objects.create(title=title, done=done)
        return JsonResponse(model_to_dict(new_todo), status=201)

    if request.method == "GET":
        all_todo = list(Todo.objects.all())
        all_in_list = []
        for todo in all_todo:
            all_in_list.append(model_to_dict(todo))

        return JsonResponse(all_in_list, safe=False)


@csrf_exempt
@error_handler_decorator
def todo_update_del(request: HttpRequest, id: int) -> JsonResponse:
    if request.method == "PUT":
        data = json.loads(request.body)
        title = data["title"]
        done = data["done"]
        todo = Todo.objects.get(id=id)
        todo.title = title
        todo.done = done
        todo.save()
        return JsonResponse(model_to_dict(todo))

    if request.method == "DELETE":
        todo = Todo.objects.get(id=id)
        todo.delete()
        return HttpResponse(status=204)
