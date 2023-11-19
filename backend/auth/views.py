from django.shortcuts import render
from django.http import HttpRequest, JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt


# Create your views here.


@csrf_exempt
def auth(request: HttpRequest, *args) -> JsonResponse:
    print("Hello world")
    return HttpResponse("Hello world")
