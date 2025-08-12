import { Link,Outlet } from "react-router"

function IMDBPage() {
    return (
        <div style={{ backgroundColor: "#f4c519" }} className="min-h-screen flex flex-col items-center justify-center">
            {/*Contenedor Principal */}
            <div
                style={{ backgroundColor: '#f4c519' }}
                className="flex flex-col items-center w-[800px] h-[1550px]"
            >
                {/*Encabezado */}
                <img src="src/assets/higher-or-lower-logo.svg" className="w-[200px] h-[200px] mt-8"></img>
                <h1 className="text-3xl font-bold mt-3">IMDb Higher or Lower Game</h1>
                <h2 className="mt-3">Elige qué juego IMDb te gustaría jugar. Un juego Higher or Lower usando estadísticas IMDb.</h2>
                {/*Tipos de Juego: Peliculas */}
                <p className="text-2xl font-bold mt-5">Peliculas</p>
                <Link
                    to="/imdb/RatingsMovies"
                    className="relative text-center text-2xl font-bold bg-white w-[400px] h-[50px] mt-5 border-b-4 border-r-4 hover:border-none transition-all"
                >🎬⭐ Ratings: Movies</Link>
                <Link
                    to="/imdb/ScoreAnimeMovies"
                    className="relative text-center text-2xl font-bold bg-white w-[400px] h-[50px] mt-3 border-b-4 border-r-4 hover:border-none transition-all"
                >🎌🎬⭐ Score: Anime Movies</Link>
                <Link
                    to="/imdb/RatingsHorrorMovies"
                    className="relative text-center text-2xl font-bold bg-white w-[400px] h-[50px] mt-3 border-b-4 border-r-4 hover:border-none transition-all"
                >😱🎬⭐ Ratings: Horror Movies</Link>
                <Link
                    to="/imdb"
                    className="relative text-center text-2xl font-bold bg-white w-[400px] h-[70px] mt-3 border-b-4 border-r-4 hover:border-none transition-all"
                >👪🎬⭐ Ratings: Family Animation Movies</Link>
                <Link
                    to="/imdb"
                    className="relative text-center text-2xl font-bold bg-white w-[400px] h-[70px] mt-3 border-b-4 border-r-4 hover:border-none transition-all"
                >🇮🇳🎬⭐ Ratings: Bollywood Movies</Link>
                <Link
                    to="/imdb"
                    className="relative text-center text-2xl font-bold bg-white w-[400px] h-[50px] mt-3 border-b-4 border-r-4 hover:border-none transition-all"
                >🎅🎬⭐ Ratings: Christmas Movies</Link>
                <Link
                    to="/imdb"
                    className="relative text-center text-2xl font-bold bg-white w-[400px] h-[50px] mt-3 border-b-4 border-r-4 hover:border-none transition-all"
                >📽💵 Box Office: Movies</Link>
                <p className="text-2xl font-bold mt-5">TV Series</p>
                {/*Tipos de Juego: Series */}
                <Link
                    to="/imdb"
                    className="relative text-center text-2xl font-bold bg-white w-[400px] h-[50px] mt-5 border-b-4 border-r-4 hover:border-none transition-all"
                >📺⭐ Ratings: TV Series</Link>
                <Link
                    to="/imdb"
                    className="relative text-center text-2xl font-bold bg-white w-[400px] h-[50px] mt-3 border-b-4 border-r-4 hover:border-none transition-all"
                >🎌📺⭐ Score: Anime TV Series</Link>
                <Link
                    to="/imdb"
                    className="relative text-center text-2xl font-bold bg-white w-[400px] h-[70px] mt-3 border-b-4 border-r-4 hover:border-none transition-all"
                >🛋️⛲📺⭐ Ratings: Friends Episodes</Link>
                <Link
                    to="/imdb"
                    className="relative text-center text-2xl font-bold bg-white w-[400px] h-[70px] mt-3 border-b-4 border-r-4 hover:border-none transition-all"
                >❄️🗡️📺⭐ Ratings: Game of Thrones Episodes</Link>
                <Link
                    to="/imdb"
                    className="relative text-center text-2xl font-bold bg-white w-[400px] h-[70px] mt-3 border-b-4 border-r-4 hover:border-none transition-all"
                >💩📺⭐ Ratings: South Park Episodes</Link>
                <Link
                    to="/"
                    className="relative text-center text-2xl font-bold bg-white w-[400px]  h-[70px] mt-3 border-b-4 border-r-4 hover:border-none transition-all"
                >🎌☠️⭐ Ratings: One Piece Episodes</Link>
                <Link
                    to="/imdb"
                    className="relative text-center text-2xl font-bold bg-white w-[400px] h-[50px] mt-3 border-b-4 border-r-4 hover:border-none transition-all"
                >🇰🇷📺⭐ Ratings: Korean Dramas</Link>
                <Outlet />
                {/*Tipos de Juego: extra */}
                <p className="text-2xl font-bold mt-5">También te puede gustar...</p>
                <Link
                    to="/imdb"
                    className="relative text-center text-2xl font-bold bg-white w-[400px] h-[50px] mt-5 border-b-4 border-r-4 hover:border-none transition-all"
                >🔍🎬 Most Googled: Movies</Link>

            </div>

            {/* Pie de paginas*/}
            <div style={{ backgroundColor: '#f4c519"' }} className="flex flex-col items-center w-[800px] h-[300px]">
                <Link to="/">🏠 Regresar al menu principal</Link>
                {/*botones descarga movil*/}
                <div className="flex space-x-4 mt-5">
                    <a href="https://apps.apple.com/us/app/the-higher-or-lower-game/id1643398769" target="_blank" rel="noopener noreferrer">
                        <button className="flex items-center justify-center hover:scale-105 transition-transform">
                            <img src="src/assets/boton-app-store.svg" alt="botonAppStore" className="w-[135px] h-[65px] object-fill" />
                        </button>
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.stattogories" target="_blank" rel="noopener noreferrer">
                        <button className="flex items-center justify-center hover:scale-105 transition-transform">
                            <img src="src/assets/boton-google-play.png" alt="botonGooglePlay" className="w-[135px] h-[65px] object-fill" />
                        </button>
                    </a>
                </div>
                <p className="mt-10 text-sm">Estos Modos de Juego IMDb Higher or Lower no están respaldados ni afiliados al sitio web de IMDb, la aplicación IMDb o el juego IMDb. Además, este sitio no está respaldado por IMDb de ninguna manera.</p>
            </div>

        </div>
    )
}
export default IMDBPage