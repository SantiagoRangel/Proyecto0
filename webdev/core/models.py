from django.db import models
import uuid


class Event(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    event_name = models.CharField(max_length=120, unique=True, verbose_name="event_name")
    event_category = models.CharField(max_length=120, verbose_name="event_category")
    thumbnail = models.CharField(max_length=120, verbose_name="thumbnail")
    event_place = models.CharField(max_length=120, verbose_name="event_place")
    event_address = models.CharField(max_length=120, verbose_name="event_address")
    event_initial_date = models.CharField(max_length=120, verbose_name="event_initial_date")
    event_final_date = models.CharField(max_length=120, verbose_name="event_final_date")
    event_type = models.CharField(max_length=120, verbose_name="event_type")

    def __str__(self):
        return self.event_name


