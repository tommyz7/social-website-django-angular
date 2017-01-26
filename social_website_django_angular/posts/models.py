from django.db import models

from core.models import TimeStampedModelMixin
from authentication.models import Account


class Post(TimeStampedModelMixin, models.Model):
    author = models.ForeignKey(Account)
    content = models.TextField()

    def __str__(self):
        return '{0}'.format(self.content)
