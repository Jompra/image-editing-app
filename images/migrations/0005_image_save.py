# Generated by Django 3.0.7 on 2020-06-05 12:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('images', '0004_remove_image_save'),
    ]

    operations = [
        migrations.AddField(
            model_name='image',
            name='save',
            field=models.BooleanField(default=False),
        ),
    ]
