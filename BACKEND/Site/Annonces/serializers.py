from .models import Annonce
from rest_framework import serializers 

class AnnonceSer(serializers.ModelSerializer):

     class Meta():
        model = Annonce 
        fields = '__all__'

