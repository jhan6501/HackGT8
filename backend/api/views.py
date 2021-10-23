from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.http import JsonResponse

def index(request):
    print ('test')
    return HttpResponse("Hello, world. You're at the polls index.")

def api_call(request):
    data = {
        'data': 'calix is a dumb fucking freshmen xd',
    }

    return JsonResponse(data)

