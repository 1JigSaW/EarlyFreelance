from django.shortcuts import render
from .serializers import OrderSerializer
from rest_framework import viewsets
from .models import Order

class OrderView(viewsets.ModelViewSet):
	serializer_class = OrderSerializer
	queryset = Order.objects.all()
