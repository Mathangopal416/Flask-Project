# backend/routes/product_routes.py

from flask import Blueprint

product_routes = Blueprint("product_routes", __name__)

@product_routes.route("/api/product/<int:id>")
def get_product(id):
    return {"message": f"Product {id} details here"}
