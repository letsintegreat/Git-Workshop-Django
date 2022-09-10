from django.urls import re_path
from calc import views

urlpatterns = [
    re_path(r'^$', views.index, name='index'),
]
