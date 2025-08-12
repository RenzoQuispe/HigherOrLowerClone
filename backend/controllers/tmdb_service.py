import requests
import random
import os
from dotenv import load_dotenv

load_dotenv()

# Definir IDs de géneros en TMDB
GENRE_ANIMATION = 16  # Animación
GENRE_HORROR = 27     # Horror

# Obtener película random en general
def get_random_movie():
    page = random.randint(1, 500)
    url = f"https://api.themoviedb.org/3/movie/popular?api_key={os.getenv('TMDB_API_KEY')}&language=en-US&page={page}"
    response = requests.get(url)
    movies = response.json().get("results", [])
    
    # Filtrar películas con calificación entre 1 y 10 (exclusivo)
    filtered_movies = [
        movie for movie in movies 
        if 1 < movie.get("vote_average", 0) < 10
    ]
    
    if filtered_movies:
        movie = random.choice(filtered_movies)
        return {
            "title": movie["title"],
            "rating": movie["vote_average"],
            "poster": f"https://image.tmdb.org/t/p/w500{movie['poster_path']}" if movie['poster_path'] else None
        }
    else:
        raise Exception("No movies found with valid ratings")

# Obtener película anime random
def get_random_anime_movie():
    """Película aleatoria de anime (Animación + Japón)"""
    
    # Primero, obtener el total de páginas disponibles
    url = "https://api.themoviedb.org/3/discover/movie"
    params = {
        "api_key": os.getenv("TMDB_API_KEY"),
        "language": "en-US",
        "page": 1,
        "sort_by": "popularity.desc",
        "with_genres": GENRE_ANIMATION,
        "with_origin_country": "JP"
    }
    
    response = requests.get(url, params=params)
    data = response.json()
    total_pages = min(data.get("total_pages", 1), 500)  # TMDB limita a 500 páginas
    
    if total_pages == 0:
        raise Exception("No anime movies found")
    
    # Ahora seleccionar una página aleatoria del rango válido
    page = random.randint(1, total_pages)
    params["page"] = page
    
    response = requests.get(url, params=params)
    movies = response.json().get("results", [])
    
    # Filtrar películas con calificación entre 1 y 10 (exclusivo)
    filtered_movies = [
        movie for movie in movies 
        if 1 < movie.get("vote_average", 0) < 10
    ]
    
    if filtered_movies:
        movie = random.choice(filtered_movies)
        return {
            "title": movie["title"],
            "rating": movie["vote_average"],
            "poster": f"https://image.tmdb.org/t/p/w500{movie['poster_path']}" if movie['poster_path'] else None
        }
    else:
        raise Exception("No anime movies found with valid ratings")

# Obtener película de horror aleatoria
def get_random_horror_movie():
    """Película aleatoria de horror con buena calificación"""
    
    # Primero, obtener el total de páginas disponibles
    url = "https://api.themoviedb.org/3/discover/movie"
    params = {
        "api_key": os.getenv("TMDB_API_KEY"),
        "language": "en-US",
        "page": 1,
        "sort_by": "popularity.desc",
        "with_genres": GENRE_HORROR,
        "vote_average.gte": 1.1,  # Mayor a 1
        "vote_average.lte": 9.9   # Menor a 10
    }
    
    response = requests.get(url, params=params)
    data = response.json()
    total_pages = min(data.get("total_pages", 1), 500)
    
    if total_pages == 0:
        raise Exception("No horror movies found")
    
    # Seleccionar página aleatoria
    page = random.randint(1, total_pages)
    params["page"] = page
    
    response = requests.get(url, params=params)
    movies = response.json().get("results", [])
    
    # Filtro adicional por si acaso (doble verificación)
    filtered_movies = [
        movie for movie in movies 
        if 1 < movie.get("vote_average", 0) < 10
    ]
    
    if filtered_movies:
        movie = random.choice(filtered_movies)
        return {
            "title": movie["title"],
            "rating": movie["vote_average"],
            "poster": f"https://image.tmdb.org/t/p/w500{movie['poster_path']}" if movie['poster_path'] else None
        }
    else:
        raise Exception("No horror movies found with valid ratings")
