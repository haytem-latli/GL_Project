# Generated by Django 3.1.7 on 2023-01-28 14:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Annonces', '0002_annonce_slug'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='annonce',
            name='slug',
        ),
    ]
