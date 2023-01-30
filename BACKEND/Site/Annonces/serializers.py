from .models import Annonce,Message,FavAnnonce
from rest_framework import serializers 

class AnnonceSer(serializers.ModelSerializer):

     class Meta():
        model = Annonce 
        fields = '__all__'
class MessageSer(serializers.ModelSerializer):

     class Meta():
        model = Message 
        fields = '__all__'
class FavAnnonce(serializers.ModelSerializer):

     class Meta():
        model = FavAnnonce 
        fields = '__all__'


