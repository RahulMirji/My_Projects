from django import forms
from .models import HandwritingSample

class HandwritingSampleForm(forms.ModelForm):
    class Meta:
        model = HandwritingSample
        fields = ['title', 'upload']
