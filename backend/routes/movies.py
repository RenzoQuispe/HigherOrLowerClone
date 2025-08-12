from flask import Blueprint, jsonify
from controllers.tmdb_service import get_random_movie, get_random_anime_movie, get_random_horror_movie

movies_bp = Blueprint('movies', __name__)
# Ratings: Movies
@movies_bp.route('/random_movie', methods=['GET'])
def random_movie():
    try:
        movie = get_random_movie()
        return jsonify(movie), 200
    except Exception as e:
        return jsonify({"error": "No se pudo obtener la película"}), 500
# Score: Anime Movies
@movies_bp.route('/random_anime_movie', methods=['GET'])
def random_anime_movie():
    try:
        movie = get_random_anime_movie()
        return jsonify(movie), 200
    except Exception as e:
        return jsonify({"error": "No se pudo obtener la película anime"}), 500
# Ratings: Horror Movies
@movies_bp.route('/random_horror_movie', methods=['GET'])
def random_horror_movie():
    try:
        movie = get_random_horror_movie()
        return jsonify(movie), 200
    except Exception as e:
        return jsonify({"error": "No se pudo obtener la película de horror"}), 500
