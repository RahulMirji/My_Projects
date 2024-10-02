from app import app, db
from flask import render_template, redirect, url_for, request
from flask_login import login_user, logout_user, login_required
from models import User, Attendance
from werkzeug.security import generate_password_hash, check_password_hash

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        user = User.query.filter_by(username=username).first()
        if user and check_password_hash(user.password, password):
            login_user(user)
            return redirect(url_for('dashboard'))
    return render_template('login.html')

@app.route('/dashboard')
@login_required
def dashboard():
    return render_template('dashboard.html')

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('home'))

@app.route('/attendance')
@login_required
def attendance():
    user = User.query.first()
    if user:
        attendance = Attendance.query.filter_by(user_id=user.id).all()
        return render_template('attendance.html', attendance=attendance)
    return redirect(url_for('dashboard'))
