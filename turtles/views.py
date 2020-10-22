from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from rest_framework.exceptions import NotFound

from .models import Turtle
from .serializers.common import TurtleSerializer

# Create your views here.

class TurtleListView(APIView):
    
    def get(self, _request): # get all turtles
        turtles = Turtle.objects.all()
        serialized_turtle_list = TurtleSerializer(turtles, many=True)
        return Response(serialized_turtle_list.data, status=status.HTTP_200_OK)
    
    def post(self, request): # create new turtle
        turtle_to_create = TurtleSerializer(data=request.data)
        if turtle_to_create.is_valid():
            turtle_to_create.save()
            return Response(turtle_to_create.data, status=status.HTTP_201_CREATED)
        return Response (turtle_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

class TurtleDetailView(APIView):
    def get_turtle(self, pk):
        try: # django try catch, returns a turtle that exists, otherwise not found
            return Turtle.objects.get(pk=pk)
        except Turtle.DoesNotExist:
            raise NotFound()
        
    def get(self, _request, pk):
        turtle = self.get_turtle(pk=pk) # get single turtle
        serialized_turtle = TurtleSerializer(turtle)
        return Response(serialized_turtle.data, status=status.HTTP_200_OK)
    
    def put(self, request, pk):
        turtle_to_update = self.get_turtle(pk=pk) # update turtle
        updated_turtle = TurtleSerializer(turtle_to_update, data=request.data)
        if updated_turtle.is_valid():
            updated_turtle.save()
            return Response(updated_turtle.data, status=status.HTTP_202_ACCEPTED)
        return Response(updated_turtle.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
    
    def delete(self, _request, pk): # delete turtle
        turtle_to_delete = self.get_turtle(pk=pk)
        turtle_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)