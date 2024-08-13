from django.shortcuts import render
from django.views.generic import ListView, CreateView
# 'reverse_lazy' to reverse-resolve URLs in a way that delays the resolution until it's actually needed.
from django.urls import reverse_lazy
from .forms import PostForm
from .models import Post

# Create your views here.
class HomePageView(ListView):
    model = Post
    template_name = 'home.html'

# view to enable users to load new images
class CreatePostView(CreateView):
    model = Post
    form_class = PostForm
    template_name = 'post.html'
    success_url = reverse_lazy('home')

