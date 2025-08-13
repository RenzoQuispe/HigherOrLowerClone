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

    max_retries = 5
    
    for attempt in range(max_retries):
        try:
            page = random.randint(1, 100)
            
            # filtros
            url = "https://api.themoviedb.org/3/discover/movie"
            params = {
                "api_key": os.getenv("TMDB_API_KEY"),
                "language": "en-US",
                "page": page,
                "sort_by": "popularity.desc",
                "vote_count.gte": 100,      # Al menos 100 votos
                "vote_average.gte": 1.1,    # Mayor a 1
                "vote_average.lte": 9.9,    # Menor a 10
            }
            
            response = requests.get(url, params=params, timeout=10)
            
            if response.status_code != 200:
                print(f"Error API: {response.status_code}")
                continue
            
            data = response.json()
            movies = data.get("results", [])
            
            # filtro adicional más estricto
            filtered_movies = [
                movie for movie in movies 
                if (1 < movie.get("vote_average", 0) < 10 and 
                    movie.get("vote_count", 0) >= 100 and     # Al menos 100 votos
                    movie.get("poster_path") is not None and  # Debe tener poster
                    len(movie.get("title", "")) > 1)          # Título válido
            ]
            
            if filtered_movies:
                movie = random.choice(filtered_movies)
                return {
                    "title": movie["title"],
                    "rating": movie["vote_average"],
                    "poster": f"https://image.tmdb.org/t/p/w500{movie['poster_path']}"
                }
            else:
                print(f"No se encontraron películas válidas en la página {page}")
                continue
                
        except Exception as e:
            print(f"Error en intento {attempt + 1}: {e}")
            continue
    
    # fallaron todos los intentos
    raise Exception(f"No se pudo obtener una película anime después de {max_retries} intentos")

# Obtener película anime random
def get_random_anime_movie():
    max_retries = 5
    
    for attempt in range(max_retries):
        try:
            page = random.randint(1, 20)
            
            url = "https://api.themoviedb.org/3/discover/movie"
            params = {
                "api_key": os.getenv("TMDB_API_KEY"),
                "language": "en-US",
                "page": page,
                "sort_by": "popularity.desc",
                "with_genres": GENRE_ANIMATION,
                "with_origin_country": "JP",
                "vote_count.gte": 25,  # Al menos 25 votos
                "vote_average.gte": 3.1,  # Mayor a 1
                "vote_average.lte": 9.9   # Menor a 10
            }

            response = requests.get(url, params=params, timeout=10)
            
            if response.status_code != 200:
                print(f"Error API: {response.status_code}")
                continue
            
            data = response.json()
            movies = data.get("results", [])
            
            # filtro adicional más estricto
            filtered_movies = [
                movie for movie in movies 
                if (3 < movie.get("vote_average", 0) < 10 and 
                    movie.get("vote_count", 0) >= 25 and  # Al menos 25 votos
                    movie.get("poster_path") is not None)  # Debe tener poster
            ]
            
            if filtered_movies:
                movie = random.choice(filtered_movies)
                return {
                    "title": movie["title"],
                    "rating": movie["vote_average"],
                    "poster": f"https://image.tmdb.org/t/p/w500{movie['poster_path']}"
                }
            else:
                print(f"No se encontraron películas válidas en la página {page}")
                continue
                
        except Exception as e:
            print(f"Error en intento {attempt + 1}: {e}")
            continue
    
    # fallaron todos los intentos
    raise Exception(f"No se pudo obtener una película anime después de {max_retries} intentos")

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
        "vote_count.gte": 100,  # Al menos 10 votos
        "vote_average.gte": 3.1,  # Mayor a 1
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
        if 3 < movie.get("vote_average", 0) < 10
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
