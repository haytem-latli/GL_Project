from django.shortcuts import get_object_or_404
from .models import Annonce
from .serializers import AnnonceSer
from rest_framework import viewsets, filters, generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser ,JSONParser
from rest_framework.permissions import SAFE_METHODS, AllowAny, IsAuthenticated, IsAuthenticatedOrReadOnly, BasePermission, IsAdminUser, DjangoModelPermissions

# Create your views here.
class CreatePost(APIView):
    parser_classes = [MultiPartParser, FormParser,JSONParser]

    def post(self, request, format=None):
        print(request.data)
        serializer = AnnonceSer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PostList(generics.ListAPIView):
    serializer_class = AnnonceSer
    queryset = Annonce.objects.all()
class PostDetail(generics.RetrieveAPIView):

    serializer_class = AnnonceSer

    def get_object(self, queryset=None, **kwargs):
        item = self.kwargs.get('pk')
        return get_object_or_404(Annonce, slug=item)
class PostListDetailfilter(generics.ListAPIView):

    queryset = Annonce.objects.all()
    serializer_class = AnnonceSer
    filter_backends = [filters.SearchFilter]
    # '^' Starts-with search.
    # '=' Exact matches.
    search_fields = ['^slug']

class DeletePost(generics.RetrieveDestroyAPIView):
    serializer_class = AnnonceSer
    def get_object(self, queryset=None, **kwargs):
        item = self.kwargs.get('pk')
        return get_object_or_404(Annonce, slug=item)

class EditPost(generics.UpdateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = AnnonceSer
    queryset = Annonce.objects.all()
