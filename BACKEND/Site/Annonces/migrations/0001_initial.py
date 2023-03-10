# Generated by Django 4.1.5 on 2023-01-30 18:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Annonce',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('catégorie', models.CharField(max_length=150)),
                ('theme', models.CharField(max_length=150)),
                ('modalité', models.CharField(max_length=150)),
                ('descirption', models.TextField()),
                ('tarif', models.IntegerField()),
                ('Wilaya', models.CharField(max_length=150)),
                ('Commune', models.CharField(max_length=150)),
                ('Adresse', models.CharField(max_length=150)),
                ('slug', models.SlugField(max_length=250, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='FavAnnonce',
            fields=[
                ('idFavAnnonce', models.AutoField(primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='Message',
            fields=[
                ('idMessage', models.AutoField(primary_key=True, serialize=False)),
                ('Context', models.TextField()),
                ('annonce', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Annonces.annonce')),
            ],
        ),
    ]
