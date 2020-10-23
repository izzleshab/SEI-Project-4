from django.db import models

# Create your models here.

class Comment(models.Model):
    text = models.TextField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True)
    turtle = models.ForeignKey(
        'turtles.Turtle', # turtles folder, Turtle model
        related_name="comments", # parent turtle relates to child comment
        on_delete=models.CASCADE # when turtle deleted, delete comment too
    )
    
    owner = models.ForeignKey(
        'jwt_auth.User', # jwt_auth folder, User model
        related_name="posted_comments",
        on_delete=models.CASCADE
    )

    def __str__(self):
        return f'Comment = {self.id} on Turtle - {self.turtle}'