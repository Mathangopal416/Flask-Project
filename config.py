import os

DB_CONFIG = {
    'host': 'localhost',
    'user': 'root',
    'password': '',
    'database': 'medingen'
}

JWT_SECRET = os.environ.get("JWT_SECRET", "secret123")
