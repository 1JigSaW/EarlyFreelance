from rest_framework import serializers
from .models import Order

class OrderSerializer(serializers.ModelSerializer):
	class Meta:
		model = Order
		fields = ('id', 'title', 'description', 'price', 'date_start', 
			'date_finish', 'created_at', 'attachment')