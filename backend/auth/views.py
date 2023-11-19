from django.shortcuts import render
from django.http import HttpRequest, HttpResponse
import json
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from auth.decorators import error_handler_decorator


# Create your views here.


@csrf_exempt
@error_handler_decorator
def sign_up(request: HttpRequest) -> HttpResponse:
    if request.method == "POST":
        data = json.loads(request.body)
        username = data["username"]
        pasword = data["password"]
        email = data["email"]
        first_name = data["first_name"]
        last_name = data["last_name"]
        new_user = User.objects.create_user(username, pasword, email)
        new_user.first_name = first_name
        new_user.last_name = last_name
        new_user.save()
        return HttpResponse(status=201)
