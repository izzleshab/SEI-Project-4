# deals with outgoing serialization such as displaying comments
# pylint: disable=no-name-in-module, import-error
from comments.serializers.common import CommentSerializer
from habitats.serializers.common import HabitatSerializer
from ..serializers.common import TurtleSerializer

class PopulatedTurtleSerializer(TurtleSerializer):
    
    comments = CommentSerializer(many=True)
    habitat = HabitatSerializer()
    