from django.db import models
from django.conf import settings
from django.db import models


# Create your models here.


class Todo(models.Model):
    title = models.CharField(max_length=120)
    done = models.BooleanField(default=False)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, default=1
    )

    def __str__(self):
        return self.title
