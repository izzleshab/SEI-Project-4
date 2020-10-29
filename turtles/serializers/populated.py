# deals with outgoing serialization such as displaying comments
# pylint: disable=no-name-in-module, import-error
from comments.serializers.populated import PopulatedCommentSerializer
from habitats.serializers.common import HabitatSerializer
from jwt_auth.serializers.nested import NestedUserSerializer
from ..serializers.common import TurtleSerializer

class PopulatedTurtleSerializer(TurtleSerializer):
    
    comments = PopulatedCommentSerializer(many=True)
    habitat = HabitatSerializer()
    owner = NestedUserSerializer()
    