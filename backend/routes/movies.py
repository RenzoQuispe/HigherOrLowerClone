from flask import Blueprint, jsonify
from controllers.tmdb_service import fetch_random_movie

movies_bp = Blueprint('movies', __name__)

@movies_bp.route('/random_movie', methods=['GET'])
def random_movie():
    try:
        movie = fetch_random_movie()  # Llamamos a la función que obtiene la película aleatoria
        return jsonify(movie), 200
    except Exception as e:
        return jsonify({"error": "No se pudo obtener la película"}), 500

@movies_bp.route('/ejemplo', methods=['GET'])
def movieEjemplo():
    return jsonify({'title': 'The Codes of War', 'rating': 6.102, 'poster': 'https://image.tmdb.org/t/p/w500/oXeiQAfRK90pxxhP5iKPXQqAIN1.jpg'})

