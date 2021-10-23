from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.http import JsonResponse
from django.template import loader

from entry import Entry


listings = []
print("test work")
defaultEntry = Entry(2000, "How to Code", "CS101", 69.42, "6782312105", "Alan Tao", "CalixIsDumb")
listings.append(defaultEntry)
print(listings)


def home(request):
    if request.method == 'GET':
        pass 
    else:
        return None
    return HttpResponse("Hello, world. You're at the polls index.")

def about(request):
    if request.method == 'GET':
        # return HTML containing
        pass
    else:
        return None
    
    return JsonResponse(data)

def market(request):
    if request.method == 'GET':
        # return HTML containing all market listings
        pass
    elif request.method == 'POST':
        # create a new market listing
        
        pass
    elif request.method == 'PUT':
        # update existing market listing
        pass
    return HttpResponse("place holder")

def login(request):
    if request.method == 'POST':
        # do login
        pass
    else:
        return None
    return HttpResponse("place holder")

def contact(request):
    if request.method == 'GET':
        # return HTML to contact page
        pass
    else:
        return None
    return HttpResponse("place holder")

def register(request):
    if request.method == 'GET':
        # return HTML to register page
        pass
    elif request.method == 'POST':
        # create a new user account
        pass
