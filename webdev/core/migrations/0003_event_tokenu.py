# Generated by Django 3.1 on 2020-08-21 01:20

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_auto_20200814_1748'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='tokenu',
            field=models.CharField(default=django.utils.timezone.now, max_length=120, verbose_name='tokenu'),
            preserve_default=False,
        ),
    ]
