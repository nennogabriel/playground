import os
DEBUG = False
TESTING = False
DATABASE_URI = 'sqlite:///:memory:'
SECRET_KEY = os.environ.get('ENV', default='you-will-never-guess')

if os.environ.get('FLASK_ENV') == 'development':
    DEBUG = True


if os.environ.get('FLASK_ENV') == 'test':
    TESTING = True
