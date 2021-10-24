from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.http import JsonResponse
from django.template import loader

import sys
import random
sys.path.append(".")
from .entry import Entry
import simplejson as json


listings = []
defaultEntry1 = Entry(2000, "How to Code", "CS1100", 15.30, "6782312105", "Alan Tao", "Alan Tao")
listings.append(defaultEntry1)
defaultEntry2 = Entry(2001, "Intro to Databases", "CS4400", 20.00, "6173903836", "Jerry Han", "Jerry Han")
listings.append(defaultEntry2)
defaultEntry3 = Entry(2341, "Intro to AI", "CS3600", 52.00, "6782312105", "Alan Tao", "Alan Tao")
listings.append(defaultEntry3)
defaultEntry4 = Entry(4261, "Data Structures and Algorithms", "CS1332", 39.20, "6782312105", "Calix Tang", "Calix Tang")
listings.append(defaultEntry4)
defaultEntry5 = Entry(9203, "How to make a Winning HackGT Project", "HACKGT", 17.50, "6782312105", "Veronica Zhang", "Veronica Zhang")
listings.append(defaultEntry5)



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
        post_uuid = random.randint(1, 420420)
        while(UUID_IS_TAKEN(post_uuid)):
            post_uuid = random.randint(1, 420420)
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
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        print ('________Delete Listing_________')
        print ('________Body Is________')
        print (body)
        post_uuid = (int)(body['uuid'])
        post_entryPassword = body['entryPassword']
        try:
            for listing in listings:
                if listing.uuid == post_uuid:
                    if listing.entryPassword == post_entryPassword:
                        store = listing.__dict__
                        print (listings)
                        listings.remove(listing)
                        print ("_____Deleted an Entry_____")
                        print (listings)
                        return JsonResponse(store)
                    else:
                        return JsonResponse({"ERROR": "Wrong password"})
            return JsonResponse({"ERROR": "Post doesn't exist"})
        except ValueError:
            return JsonResponse({"ERROR": "Error occurred while deleting listing!"})
    else:
        pass

def UUID_IS_TAKEN(number):
    for listing in listings:
        if (int)(listing.uuid) == (int)(number):
            return True
    return False