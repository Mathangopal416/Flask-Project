from flask import Blueprint, jsonify, request
from flask_jwt_extended import create_access_token, jwt_required
from models import db, Product

api_bp = Blueprint('api', __name__)

@api_bp.route('/login', methods=['POST'])
def login():
    username = request.json.get('username')
    password = request.json.get('password')
    if username == 'admin' and password == 'admin':
        token = create_access_token(identity=username)
        return jsonify(access_token=token)
    return jsonify(msg='Invalid credentials'), 401

@api_bp.route('/products', methods=['GET'])
@jwt_required()
def get_products():
    products = Product.query.all()
    return jsonify([p.serialize() for p in products])
