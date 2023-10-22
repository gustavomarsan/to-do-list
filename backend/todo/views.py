from todo.models import Todo
from django.shortcuts import render
from django.http import HttpRequest, JsonResponse
import json
from django.forms.models import model_to_dict
from django.views.decorators.csrf import csrf_exempt

# Create your views here.


@csrf_exempt
def todo_endpoint(request: HttpRequest) -> JsonResponse:
    if request.method == "POST":
        data = json.loads(request.body)
        title = data["title"]
        done = data["done"]
        new_todo = Todo.objects.create(title=title, done=done)
        return JsonResponse(model_to_dict(new_todo))

    if request.method == "GET":
        all_todo = list(Todo.objects.all())
        all_in_list = []
        for todo in all_todo:
            all_in_list.append(model_to_dict(todo))

        return JsonResponse(all_in_list, safe=False)
