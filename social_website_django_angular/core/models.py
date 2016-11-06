from django.db import models


class TimeStampedModelMixin(models.Model):
	"""
	Provides created and updated fields for model.
	"""

	created = models.DateTimeField(auto_now_add=True)
	updated = models.DateTimeField(auto_now=True)

	class Meta:
		abstract = True
