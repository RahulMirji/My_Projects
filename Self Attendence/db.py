from app import app, db
from models import User, Attendance
from werkzeug.security import generate_password_hash

# Using a single application context to perform both actions
with app.app_context():
    # Creating a new user
    new_user = User(username='john_doe', password=generate_password_hash('password123'))
    db.session.add(new_user)
    db.session.commit()  # Committing the user creation

    # Adding an attendance record for the new user
    attendance = Attendance(user_id=new_user.id, status='Present')
    db.session.add(attendance)
    db.session.commit()  # Committing the attendance record
