from rest_framework.serializers import ModelSerializer, SerializerMethodField
from .models import CourseModel, UserCourseRelationModel, LessonModel, UserCourseRelationModel

import random
from rest_framework import serializers
class NewCoursesSerializer(ModelSerializer):
    class Meta:
        model = CourseModel
        fields = ['guid', 'thumbnail', 'title', 'slug', 'short_description', 'created_at']


class RecommendedCoursesSerializer(ModelSerializer):
    subscribers = SerializerMethodField(method_name='get_subscribers')
    
    def get_subscribers(self, obj):
        return obj.course_relations.count()

    class Meta:
        model = CourseModel
        fields = ['guid', 'thumbnail', 'title', 'slug', 'short_description', 'subscribers', 'created_at']


class UserCourseRelationSerializer(ModelSerializer):
    class Meta:
        model = UserCourseRelationModel
        fields = [
            'guid', 'user', 'course', 'current_lesson', 'is_course_over'
        ]


class LessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = LessonModel
        fields = ['guid', 'source', 'description']

class CourseDetailSerializer(serializers.ModelSerializer):
    lessons = LessonSerializer(source='course_lessons', many=True, read_only=True)
    lesson_count = serializers.IntegerField(source='course_lessons.count', read_only=True)

    class Meta:
        model = CourseModel
        fields = [
            'guid',
            'thumbnail',
            'title',
            'slug',
            'short_description',
            'description',
            'is_new',
            'is_recommended',
            'lesson_count',
            'lessons',
        ]