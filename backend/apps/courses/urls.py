from django.urls import path
from .views import NewCoursesApiView, RecomendedCoursesApiView, UserCourseRelationApiView, CourseDetailApiView

app_name = 'courses'


urlpatterns = [
    path('new-courses', NewCoursesApiView.as_view(), name='new-courses'),
    path('recommended-courses', RecomendedCoursesApiView.as_view(), name='recommended-courses'),
    path('user/<uuid:guid>',UserCourseRelationApiView.as_view()),
    path('course/<slug:slug>', CourseDetailApiView.as_view(), name='course-detail'),
]
