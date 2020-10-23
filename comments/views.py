from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .models import Comment

from rest_framework.exceptions import NotFound, PermissionDenied
from .serializers.common import CommentSerializer

# Create your views here.

class CommentListView(APIView):
    permission_classes = (IsAuthenticated, )
    
    def post(self, request): # create comment
        request.data['owner'] = request.user.id
        comment_to_create = CommentSerializer(data=request.data)
        if comment_to_create.is_valid():
            comment_to_create.save()
            return Response(comment_to_create.data, status=status.HTTP_201_CREATED)
        return Response(comment_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
    
class CommentDetailView(APIView):
    permission_classes = (IsAuthenticated, )
    
    def get_comment(self, pk):
        try:
            return Comment.objects.get(pk=pk)
        except Comment.DoesNotExist:
            raise NotFound()
        
    def is_comment_owner(self, comment, user):
        if comment.owner.id != user.id:
            raise PermissionDenied()
        
    def delete(self, request, pk):
        comment_to_delete = self.get_comment(pk=pk)
        self.is_comment_owner(comment_to_delete, request.user)
        comment_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)