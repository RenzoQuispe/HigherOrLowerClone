# Clon de HigherOrLowerGame
Clon del juego Higher or Lower (https://www.higherorlowergame.com/)

## Sobre el Juego
Adivina cuál de las dos cartas mostradas es mayor. Si aciertas, aparecerá una nueva carta y simplemente vuelve a adivinar cuál crees que es mayor. Cada juego tiene infinitas preguntas, así que esfuérzate por conseguir una racha de puntuaciones altas. 

De momento solo es funcional el modo de juego: Movies -> Rating:Movies (http://localhost:5173/imdb/RatingsMovies o http://192.168.1.X:5173/imdb/RatingsMovies, dependiendo de tu IP local y desde donde quieres acceder)

<img src="https://drive.google.com/uc?export=view&id=1Eoaz6EH8QNL647JQS3n60p8Zr3z28mlm" width="500" />
<img src="https://drive.google.com/uc?export=view&id=1Gl0RdF2oALczS6NEvhMpQOTVKK9KFicN" width="500" />
<img src="https://drive.google.com/uc?export=view&id=13HWoDnxS7Cf7ujwuaL9XI2J2gB6BT0LV" width="500" />

## Configuración

### Setup .env
Modificar backup/.env - Ejemplo:

```
TMDB_API_KEY='456a9367b3718812d8c50b36c5b2a763'
```

Modificar frontend/.env - Ejemplo:

```
VITE_API_URL=http://192.168.1.10:5000
```
### Inicio rapido con Docker
```
git clone https://github.com/RenzoQuispe/HigherOrLowerClone.git
cd HigherOrLowerClone
docker-compose up --build
```

