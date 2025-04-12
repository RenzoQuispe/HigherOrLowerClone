import requests
import random
import os
from dotenv import load_dotenv

# Cargar variables de entorno desde el archivo .env
load_dotenv()

# Función que obtiene una película aleatoria desde la API de TMDB
def get_random_movie():
    page = random.randint(1, 500)
    url = f"https://api.themoviedb.org/3/movie/popular?api_key={os.getenv('TMDB_API_KEY')}&language=en-US&page={page}"
    response = requests.get(url)
    movies = response.json().get("results", [])
    
    # Seleccionar una película aleatoria
    if movies:
        movie = random.choice(movies)
        return {
            "title": movie["title"],
            "rating": movie["vote_average"],
            "poster": f"https://image.tmdb.org/t/p/w500{movie['poster_path']}" if movie['poster_path'] else None
        }
    else:
        raise Exception("No movies found in response")

# Función que envuelve la llamada a get_random_movie para ser utilizada en el backend
def fetch_random_movie():
    try:
        return get_random_movie()  # Llamamos a la función que obtiene la película aleatoria
    except Exception as e:
        raise Exception("Error fetching random movie")
