import { Link } from "react-router"

import botonAppStore from '../../assets/boton-app-store.svg'
import botonPlayStore from '../../assets/boton-google-play.png'
import logo from '../../assets/higher-or-lower-logo.svg'
function RatingsMovies() {
    return (
        <div style={{ backgroundColor: '#f4c519' }} className="min-h-screen flex flex-col items-center justify-center">
            {/*Encabezado */}
            <div style={{ backgroundColor: '#f4c519' }}
                className="flex flex-col items-center w-[600px] h-[375px]"
            >
                <img src={logo} className="w-[200px] h-[200px] mt-8"></img>
                <h1 className="text-3xl font-bold mt-3">Adivina qué película tiene una calificación más alta en IMDb</h1>
                <h2 className="mt-3">Un juego de mayor o menor usando estadísticas de calificación de películas IMDb. Datos de calificaciones de películas de IMDb actualizados en febrero de 2025.</h2>
            </div>
            {/* Contenedor Principal*/}
            <Link
                    to="/imdb/RatingsMovies"
                    className="relative text-center text-2xl font-bold bg-white w-[160px] h-[50px] mt-5 border-b-4 border-r-4 hover:border-none transition-all"
            >
                Jugar!
            </Link>
            <Link className="mt-5">🏆 Leaderboard</Link>
            {/* Pie de Pagina*/}
            <div style={{ backgroundColor: '#f4c519' }} className="flex flex-col items-center w-[800px] h-[300px] mt-5">
                <Link to="/">🏠 Regresar al menu principal</Link>
                {/*botones descarga movil*/}
                <div className="flex space-x-4 mt-5">
                    <a href="https://apps.apple.com/us/app/the-higher-or-lower-game/id1643398769" target="_blank" rel="noopener noreferrer">
                        <button className="flex items-center justify-center hover:scale-105 transition-transform">
                            <img src={botonAppStore} alt="botonAppStore" className="w-[135px] h-[65px] object-fill" />
                        </button>
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.stattogories" target="_blank" rel="noopener noreferrer">
                        <button className="flex items-center justify-center hover:scale-105 transition-transform">
                            <img src={botonPlayStore} alt="botonGooglePlay" className="w-[135px] h-[65px] object-fill" />
                        </button>
                    </a>
                </div>
                <p className="mt-10 text-sm">Estos Modos de Juego IMDb Higher or Lower no están respaldados ni afiliados al sitio web de IMDb, la aplicación IMDb o el juego IMDb. Además, este sitio no está respaldado por IMDb de ninguna manera.</p>
            </div>
        </div>
    )
}
export default RatingsMovies