# Generated by Django 3.1.2 on 2020-10-23 13:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('habitats', '0001_initial'),
        ('turtles', '0002_turtle_owner'),
    ]

    operations = [
        migrations.AddField(
            model_name='turtle',
            name='habitat',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.PROTECT, related_name='habitat', to='habitats.habitat'),
            preserve_default=False,
        ),
    ]

