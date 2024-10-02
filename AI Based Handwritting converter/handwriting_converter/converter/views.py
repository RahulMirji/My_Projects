from django.shortcuts import render
from PIL import Image  # Import the Image class
import pytesseract  # Make sure pytesseract is also imported

def upload_handwriting(request):
    extracted_text = ""  # Initialize variable
    if request.method == 'POST' and request.FILES.get('handwriting_sample'):
        img_file = request.FILES['handwriting_sample']
        
        # Convert the uploaded file to an image (PIL Image)
        img = Image.open(img_file)
        
        # Extract text from the image using pytesseract
        extracted_text = pytesseract.image_to_string(img)
        
    return render(request, 'converter/upload_handwriting.html', {'extracted_text': extracted_text})

def upload_success(request):
    return render(request, 'converter/success.html')

from django.shortcuts import render

def home(request):
    return render(request, 'converter/home.html')  # Create a template for the homepage
 
# the processing of uploaded file begains here
from django.shortcuts import render
from django.http import HttpResponse
import pytesseract

def upload_handwriting(request):
    extracted_text = ""  # Initialize variable
    if request.method == 'POST' and request.FILES.get('handwriting_sample'):
        img_file = request.FILES['handwriting_sample']
        
        # Convert the uploaded file to an image (PIL Image)
        img = Image.open(img_file)
        
        # Extract text from the image using pytesseract
        extracted_text = pytesseract.image_to_string(img)
        
    return render(request, 'converter/upload_handwriting.html', {'extracted_text': extracted_text})
