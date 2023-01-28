from django.db import models
from users.models import NewUser


# Create your models here.
class Annonce(models.Model):

    user = models.ForeignKey(NewUser, on_delete=models.CASCADE)
    catégorie = models.CharField(max_length=150)
    theme = models.CharField(max_length=150)
    modalité = models.CharField(max_length=150)
    descirption = models.TextField()
    tarif = models.IntegerField()
    Wilaya = models.CharField(max_length=150)
    Commune = models.CharField(max_length=150)
    Adresse = models.CharField(max_length=150)
    Photo : models.ImageField(upload_to='static/' , default="imad")
    slug = models.SlugField(max_length=250,unique=True)


    def __str__(self):

        return self.user
