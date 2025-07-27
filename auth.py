from flask import Blueprint, request, jsonify
import jwt
from config import JWT_SECRET

auth_routes = Blueprint("auth", __name__)

@auth_routes.route("/api/login", methods=["POST"])
def login():
    data = request.get_json()
    if data["username"] == "admin" and data["password"] == "admin":
        token = jwt.encode({"user": "admin"}, JWT_SECRET, algorithm="HS256")
        return jsonify({"token": token})
    return jsonify({"error": "Invalid credentials"}), 401
