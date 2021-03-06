# Generated by Django 2.2.12 on 2022-04-28 19:29

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=300)),
                ('description', models.TextField()),
                ('price', models.FloatField()),
                ('date_start', models.DateField(auto_now_add=True)),
                ('date_finish', models.DateField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('attachment', models.FileField(upload_to='')),
            ],
        ),
    ]
