# NotesApp

NotesApp is a full-stack web application built with Python and Flask. It allows users to register, log in securely, create and delete personal notes, and interact with a user-friendly interface. The project demonstrates a solid understanding of Flask's web development capabilities, user session management, templating with Jinja2, database modeling with SQLAlchemy, and client-server communication using JavaScript.

## Key Learning Outcomes

This project helped reinforce the following core web development concepts:

- Structuring a Flask application using Blueprints
- Building secure authentication and session management with Flask-Login
- Creating and managing relational models using SQLAlchemy ORM
- Hashing and validating passwords using Werkzeug
- Designing templates with Jinja2 and Bootstrap 4
- Performing asynchronous data operations using JavaScript and the Fetch API
- Managing user feedback through Flask flash messages
- Implementing route protection with decorators like `@login_required`

## Features

- User registration and secure login/logout
- Passwords are hashed before being stored
- Flash messages for login errors, success, and validations
- Authenticated users can create and delete notes
- Notes are stored in an SQLite database with timestamps
- Bootstrap 4 used for layout and styling
- JavaScript used for AJAX-based note deletion

## Technologies Used

- Python 3.x
- Flask
- Flask-SQLAlchemy
- Flask-Login
- SQLite
- Jinja2 templating
- HTML/CSS (via Bootstrap)
- JavaScript (Fetch API)

## Project Structure

NotesApp/
├── Main.py # Application entry point
├── database.db # SQLite database file (created on first run)
├── README.md
├── website/ # Main Flask package
│ ├── init.py # App factory and configuration
│ ├── models.py # SQLAlchemy models: User, Notes
│ ├── views.py # Main app routes (home, note handling)
│ ├── auth.py # Authentication routes (login, sign-up, logout)
│ ├── templates/ # HTML templates
│ │ ├── base.html
│ │ ├── home.html
│ │ ├── login.html
│ │ └── sign_up.html
│ └── static/ # Static files (JS, CSS, images)
└── .venv/ # Virtual environment (not tracked in version control)



## Setup Instructions


### 1. Clone the repository

git clone https://github.com/your-username/NotesApp.git
cd NotesApp


### 2. Create a virtual environment

python3 -m venv .venv
source .venv/bin/activate  # macOS/Linux

or

.venv\Scripts\activate     # Windows


### 3. Install dependencies

pip install -r requirements.txt

If a requirements.txt file is not present, manually install:

pip install flask flask-sqlalchemy flask-login


### 4. Run the app

Copy code
python Main.py


## Future Improvements

- Add note editing functionality

- Improve UI design and responsiveness

- Implement user email verification

- Deploy the app using Render or similar platform

- Add test coverage and CI/CD setup


## Author
This project was created as part of my learning journey in full-stack web development with Flask. It demonstrates a practical application of backend logic, authentication systems, frontend rendering, and database integration.
