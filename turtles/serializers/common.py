from rest_framework import serializers
from ..models import Turtle

class TurtleSerializer(serializers.ModelSerializer): # converts data from models to valid JSON
    
    class Meta:
        model = Turtle
        fields = '__all__'