# Generated by Django 3.1.2 on 2020-10-23 12:33

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('turtles', '0002_turtle_owner'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField(max_length=300)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='posted_comments', to=settings.AUTH_USER_MODEL)),
                ('turtle', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comments', to='turtles.turtle')),
            ],
        ),
    ]
