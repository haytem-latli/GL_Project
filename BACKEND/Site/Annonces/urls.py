from django.urls import path
from .views import CreatePost , PostList,PostDetail,PostListDetailfilter,DeletePost,EditPost

app_name = 'Annonces'

urlpatterns = [
    path('create/', CreatePost.as_view(), name="create_annonce"),
    path('create/getall', PostList.as_view(), name="findAll_annonce"),
    path('detail/<int:pk>/', PostDetail.as_view(), name="detail_annonce"),
    path('filter/', PostListDetailfilter.as_view(), name="filter_annonce"),
    path('delete/<str:pk>/', DeletePost.as_view(), name="delete_annonce"),
    path('edit/<str:pk>/', EditPost.as_view(), name="edit_annonce"),


    


]
