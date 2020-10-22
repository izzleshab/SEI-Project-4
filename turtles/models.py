from django.db import models

# Create your models here.

class Turtle(models.Model):
    name = models.CharField(max_length=50)
    species = models.CharField(max_length=50)
    diet = models.CharField(max_length=20)
    image = models.CharField(max_length=200)
    
    def __str__(self):
        return f'{self.name} - {self.species}'
    