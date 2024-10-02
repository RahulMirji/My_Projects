from django.db import models

# Create your models here.
from django.db import models

class HandwritingSample(models.Model):
    title = models.CharField(max_length=100)
    upload = models.ImageField(upload_to='uploads/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
