import { Link,Outlet } from "react-router"

function SpotifyPage() {
    return (
        <div style={{ backgroundColor: "#00d95b" }} className="min-h-screen flex flex-col items-center justify-center">
            {/*Contenedor Principal */}
            <div
                style={{ backgroundColor: '#00d95b' }}
                className="flex flex-col items-center w-[800px] h-[790px]"
            >
                {/*Encabezado */}
                <img src="src/assets/higher-or-lower-logo.svg" className="w-[200px] h-[200px] mt-8"></img>
                <h1 className="text-3xl font-bold mt-3">Spotify Higher or Lower Game</h1>
                <h2 className="mt-3">Elige cual modo de juego Spotify Higher Or Lower Game te justaria jugar :D</h2>
                {/*Tipos de Juego*/}
                <Link
                    to=""
                    className="relative text-center text-2xl font-bold bg-white w-[350px] h-[60px] mt-5 border-b-4 border-r-4 hover:border-none transition-all"
                >
                👨‍🎤 Artists: Monthly Listeners</Link>
                <Link
                    to=""
                    className="relative text-center text-2xl font-bold bg-white w-[350px] h-[60px] mt-3 border-b-4 border-r-4 hover:border-none transition-all"
                >🎸 Songs: Total Plays</Link>
                <Link
                    to=""
                    className="relative text-center text-2xl font-bold bg-white w-[350px] h-[60px] mt-3 border-b-4 border-r-4 hover:border-none transition-all"
                >💿 Albums: Total Plays</Link>
                {/*Tipos de Juego: extra */}
                <p className="text-2xl font-bold mt-5">También te puede gustar...</p>
                <Link
                    to=""
                    className="relative text-center text-2xl font-bold bg-white w-[350px] h-[60px] mt-5 border-b-4 border-r-4 hover:border-none transition-all"
                >🎤🤍 Eurovision</Link>
                <Link
                    to=""
                    className="relative text-center text-2xl font-bold bg-white w-[350px] h-[60px] mt-5 border-b-4 border-r-4 hover:border-none transition-all"
                >🔍👨‍🎤🎸 Most Googled: Music</Link>

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
export default SpotifyPage