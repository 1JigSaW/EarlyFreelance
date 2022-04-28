from django.db import models

class Order(models.Model):
	title = models.CharField(max_length=300)
	description = models.TextField()
	price = models.FloatField()
	date_start = models.DateField(auto_now_add=True)
	date_finish = models.DateField()
	created_at = models.DateTimeField(auto_now_add=True)
	attachment = models.FileField()

	def __str__(self):
		return self.title

