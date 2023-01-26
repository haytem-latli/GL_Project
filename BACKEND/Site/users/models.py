from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager


class CustomAccountManager(BaseUserManager):

    def create_superuser(self, email, username, first_name, password, **other_fields):

        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)

        if other_fields.get('is_staff') is not True:
            raise ValueError(
                'Superuser must be assigned to is_staff=True.')
        if other_fields.get('is_superuser') is not True:
            raise ValueError(
                'Superuser must be assigned to is_superuser=True.')

        return self.create_user(email, username, first_name, password, **other_fields)

    def create_user(self, email, username, first_name, password, **other_fields):

        if not email:
            raise ValueError(_('You must provide an email address'))

        email = self.normalize_email(email)
        user = self.model(email=email, username=username,
                          first_name=first_name, **other_fields)
        user.set_password(password)
        user.save()
        return user


class NewUser(AbstractBaseUser, PermissionsMixin):

    email = models.EmailField(_('email address'), unique=True)
    username = models.CharField(max_length=150, unique=True)
    first_name = models.CharField(max_length=150, blank=True)
    start_date = models.DateTimeField(default=timezone.now)
    about = models.TextField(_(
        'about'), max_length=500, blank=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    objects = CustomAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'first_name']

    def __str__(self):
        return self.username



class Annonce(models.Model):

    idAnnonce = models.AutoField(primary_key=True)
    user = models.ForeignKey(NewUser, on_delete=models.CASCADE)
    catégorie = models.CharField(max_length=150)
    theme = models.CharField(max_length=150)
    modalité = models.CharField(max_length=150)
    descirption = models.TextField()
    tarif = models.IntegerField()
    Wilaya = models.CharField(max_length=150)
    Commune = models.CharField(max_length=150)
    Adresse = models.CharField(max_length=150)
    Photo : models.ImageField(upload_to='static/')

    def __str__(self):

        return self.idAnnonce


class Message(models.Model):
    idMessage = models.AutoField(primary_key=True)
    annonce = models.ForeignKey(Annonce, on_delete=models.CASCADE)
    sender = models.ForeignKey(NewUser, on_delete=models.CASCADE)
    receiver = models.ForeignKey(NewUser, on_delete=models.CASCADE)
    Context = models.TextField()


    def __str__(self):

        return self.idMessage



class FavAnnonce (models.Model):
    idFavAnnonce = models.AutoField(primary_key=True)
    user = models.ForeignKey(NewUser, on_delete=models.CASCADE)
    annonce = models.ForeignKey(Annonce, on_delete=models.CASCADE)

    def __str__(self):

        return self.idFavAnnonce




