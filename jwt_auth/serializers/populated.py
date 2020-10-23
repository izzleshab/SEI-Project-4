# pylint: disable=no-name-in-module, import-error

from turtles.serializers.common import TurtleSerializer
from comments.serializers.common import CommentSerializer
from ..serializers.common import UserSerializer

class PopulatedUserSerializer(UserSerializer):
    created_turtles = TurtleSerializer(many=True)
    posted_comments = CommentSerializer(many=True)