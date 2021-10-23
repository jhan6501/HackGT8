from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.http import JsonResponse
from django.template import loader

import sys
sys.path.append(".")
from .entry import Entry
import simplejson as json


listings = []
defaultEntry = Entry(2000, "How to Code", "CS101", 69.42, "6782312105", "Alan Tao", "CalixIsDumb")
listings.append(defaultEntry)
listings.append(defaultEntry)
listings.append(defaultEntry)
listings.append(defaultEntry)
listings.append(defaultEntry)



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

def get_all_listings(request):
    results = [entry.__dict__ for entry in listings]
    print(results)
    return JsonResponse(results, safe =False)

def get_listing_by_id(request):
    if request.method == 'GET':
        id = request.GET['id']
        for listing in listings:
            print (id, listing.uuid, id == listing.uuid)
            if listing.uuid == (int)(id):
                print("RETURNED SUCCESFULLY")
                return JsonResponse(listing.__dict__)

        #Search unsuccessful
        return JsonResponse({"None": "Error"})
    else: 
        pass

def post_listing(request):
    print ('_______POST LISTING_________')
    if request.method == 'POST':
        print ('request is')
        print (request)
        print ('request.POST is')
        print (request.POST)
        print ('request.body is')
        print (request.body)
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        print ("body is")
        print (body)
        post_uuid = (int)(body['uuid'])
        post_title = body['title']
        post_course = body['course']
        post_price = (int)(body['price'])
        post_phone_number = (int)(body['phone_number'])
        post_nameVendor = body['nameVendor']
        post_entryPassword = body['entryPassword']
        try:
            listings.append(
                Entry (
                    uuid = post_uuid,
                    title = post_title, 
                    course = post_course, 
                    price = post_price, 
                    phone_number = post_phone_number, 
                    nameVendor = post_nameVendor, 
                    entryPassword = post_entryPassword
                )
            )
            return HttpResponse("<div> POST </div>")
        except:
            return JsonResponse({"ERROR": "Error occurred while posting listing!"})
    else:
        pass

def delete_listing(request):
    if request.method == 'POST':
        post_uuid = (int)(request.POST['uuid'])
        post_entryPassword = request.POST['entryPassword']
        try:
            for listing in listings:
                if listing.uuid == post_uuid:
                    if listing.entryPassword == post_entryPassword:
                        store = listing.__dict__
                        listings.remove(listing)
                        return JsonResponse(store)
                    else:
                        return JsonResponse({"ERROR": "Wrong password"})
            return JsonResponse({"ERROR": "Post doesn't exist"})
        except ValueError:
            return JsonResponse({"ERROR": "Error occurred while deleting listing!"})
    else:
        pass