from django.urls import path
from .views import TurtleListView, TurtleDetailView

urlpatterns = [
    path('', TurtleListView.as_view()),
    path('<int:pk>/', TurtleDetailView.as_view())
]