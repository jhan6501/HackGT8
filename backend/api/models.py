from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

# Create your models here.

class Listing(models.Model):
    title = models.CharField(max_length = 80)
    author = models.CharField(max_length = 30)
    edition = models.CharField(max_length = 10)
    date_posted = models.DateTimeField(default = timezone.now)
    description = models.TextField()
    seller = models.ForeignKey(User, on_delete on_delete = models.CASCADE)