import { Link } from "react-router"
import ExpandableText from "../componentes/ExpandableText"
function HomePage() {
    return (
        <div style={{ backgroundColor: '#545455' }} className="min-h-screen flex flex-col items-center justify-center">
            {/*Contenedor Encabezado y Tipos de Juego */}
            <div
                style={{ backgroundColor: '#545455' }}
                className="flex flex-col items-center w-[820px] h-[1700px]"
            >
                {/* Encabezado */}
                <img
                    src="src/assets/higher-or-lower-logo.svg"
                    alt="Higher or Lower Logo"
                    className="w-[200px] h-[200px] mt-8"
                />
                <h1 className="text-4xl font-bold my-6 text-center text-white">
                    Choose a higher or lower game to play
                </h1>

                {/* Contenedor Juegos */}
                <Link
                    to="/google"
                    className="relative text-center text-2xl font-bold bg-white w-[400px] h-[50px] mt-3 border-b-4 border-r-4 hover:border-none transition-all"
                >
                    🔍 Google
                </Link>
                <Link
                    to="/"
                    className="relative text-center text-2xl font-bold bg-white w-[400px] h-[50px] mt-3 border-b-4 border-r-4 hover:border-none transition-all"
                >
                    💸🛍️ Shopping
                </Link>
                <Link
                    to="/imdb"
                    className="relative text-center text-2xl font-bold bg-white w-[400px] h-[50px] mt-3 border-b-4 border-r-4 hover:border-none transition-all"
                >
                    🎬🍿 Movies
                </Link>
                <Link
                    to="/spotify"
                    className="relative text-center text-2xl font-bold bg-white w-[400px] h-[50px] mt-3 border-b-4 border-r-4 hover:border-none transition-all"
                >
                    🎧👨‍🎤 Spotify
                </Link>
                <Link
                    to="/"
                    className="relative text-center text-2xl font-bold bg-white w-[400px] h-[50px] mt-3 border-b-4 border-r-4 hover:border-none transition-all"
                >
                    🏀⚽️ Sports
                </Link>
                <Link
                    to="/"
                    className="relative text-center text-2xl font-bold bg-white w-[400px] h-[50px] mt-3 border-b-4 border-r-4 hover:border-none transition-all"
                >
                    🤩 Celebrity
                </Link>
                <Link
                    to="/"
                    className="relative text-center text-2xl font-bold bg-white w-[400px] h-[50px] mt-3 border-b-4 border-r-4 hover:border-none transition-all"
                >
                    🌍 Geography
                </Link>
                <Link
                    to="/"
                    className="relative text-center text-2xl font-bold bg-white w-[400px] h-[50px] mt-3 border-b-4 border-r-4 hover:border-none transition-all"
                >
                    🕹️🎮 Video Games
                </Link>
                <Link
                    to="/"
                    className="relative text-center text-2xl font-bold bg-white w-[400px] h-[50px] mt-3 border-b-4 border-r-4 hover:border-none transition-all"
                >
                    💰🤑 Richest
                </Link>
                <Link
                    to="/"
                    className="relative text-center text-2xl font-bold bg-white w-[400px] h-[50px] mt-3 border-b-4 border-r-4 hover:border-none transition-all"
                >
                    ▶️ YouTube
                </Link>
                <Link
                    to="/"
                    className="relative text-center text-2xl font-bold bg-white w-[400px] h-[50px] mt-3 border-b-4 border-r-4 hover:border-none transition-all"
                >
                    🚗 Cars
                </Link>
                <Link
                    to="/"
                    className="relative text-center text-2xl font-bold bg-white w-[400px] h-[50px] mt-3 border-b-4 border-r-4 hover:border-none transition-all"
                >
                    📚📖 Books
                </Link>
                <Link
                    to="/"
                    className="relative text-center text-2xl font-bold bg-white w-[400px] h-[50px] mt-3 border-b-4 border-r-4 hover:border-none transition-all"
                >
                    🌐 Websites
                </Link>
                <Link
                    to="/"
                    className="relative text-center text-2xl font-bold bg-white w-[400px] h-[50px] mt-3 border-b-4 border-r-4 hover:border-none transition-all"
                >
                    ⬆️⬇️ Reddit
                </Link>
                <Link
                    to="/"
                    className="relative text-center text-2xl font-bold bg-white w-[400px] h-[50px] mt-3 border-b-4 border-r-4 hover:border-none transition-all"
                >
                    🧱 LEGO
                </Link>
                <Link
                    to="/"
                    className="relative text-center text-2xl font-bold bg-white w-[400px] h-[50px] mt-3 border-b-4 border-r-4 hover:border-none transition-all"
                >
                    🎴 Pokémon
                </Link>
                <Link
                    to="/"
                    className="relative text-center text-2xl font-bold bg-white w-[400px] h-[50px] mt-3 border-b-4 border-r-4 hover:border-none transition-all"
                >
                    🎴 Yu-Gi-Oh!
                </Link>
                <Link
                    to="/"
                    className="relative text-center text-2xl font-bold bg-white w-[400px] h-[50px] mt-3 border-b-4 border-r-4 hover:border-none transition-all"
                >
                    📹 TikTok
                </Link>
                <Link
                    to="/"
                    className="relative text-center text-2xl font-bold bg-white w-[400px] h-[50px] mt-3 border-b-4 border-r-4 hover:border-none transition-all"
                >
                    📸 Instagram
                </Link>
                <Link
                    to="/"
                    className="relative text-center text-2xl font-bold bg-white w-[400px] h-[50px] mt-3 border-b-4 border-r-4 hover:border-none transition-all"
                >
                    🎌 My Anime List
                </Link>
                <Link
                    to="/"
                    className="relative text-center text-2xl font-bold bg-white w-[400px] h-[50px] mt-3 border-b-4 border-r-4 hover:border-none transition-all"
                >
                    🏅🏊 Olympics
                </Link>
                <Link
                    to="/"
                    className="relative text-center text-2xl font-bold bg-white w-[400px] h-[50px] mt-3 border-b-4 border-r-4 hover:border-none transition-all"
                >
                    🎤🤍 Eurovision
                </Link>
            </div>
            {/* Contenedor Extra */}
            <div style={{ backgroundColor: '#545455' }} className="flex flex-col items-center w-[820px] h-[700px]">
                {/*botones */}
                <div className="flex space-x-4">

                    <button className="flex items-center justify-center hover:scale-105 transition-transform">
                        <img src="src/assets/boton-app-store.svg" alt="botonAppStore" className="w-[135px] h-[65px] object-fill" />
                    </button>
                    <button className="flex items-center justify-center hover:scale-105 transition-transform">
                        <img src="src/assets/boton-google-play.png" alt="botonGooglePlay" className="w-[135px] h-[65px] object-fill" />
                    </button>
                </div>
                <h1 className="text-3xl text-white font-bold mt-10">Higher or Lower FAQs</h1>
                {/*Preguntas */}
                <div className="mt-5">
                    <ExpandableText />
                </div>
                {/*Idioma */}
                <div className="flex space-x-4 mt-5">
                    <h1 className="text-white font-bold mt-3">Idioma: </h1>
                    <button
                        className="text-green-500 font-bold hover:text-blue-700 cursor-pointer"
                        onClick={() => changeLanguage('en')}>
                        English
                    </button>
                    <h1 className="text-white mt-3">|</h1>
                    <button
                        className="text-green-500 font-bold hover:text-blue-700 cursor-pointer"
                        onClick={() => changeLanguage('es')}>
                        Español
                    </button>
                    <h1 className="text-white mt-3">|</h1>
                    <button
                        className="text-green-500 font-bold hover:text-blue-700 cursor-pointer"
                        onClick={() => changeLanguage('fr')}>
                        Français
                    </button>
                    <h1 className="text-white mt-3">|</h1>
                    <button
                        className="text-green-500 font-bold hover:text-blue-700 cursor-pointer"
                        onClick={() => changeLanguage('de')}>
                        Deutsch
                    </button>
                    <h1 className="text-white mt-3">|</h1>
                    <button
                        className="text-green-500 font-bold hover:text-blue-700 cursor-pointer"
                        onClick={() => changeLanguage('it')}>
                        Italiano
                    </button>
                    <h1 className="text-white mt-3">|</h1>
                    <button
                        className="text-green-500 font-bold hover:text-blue-700 cursor-pointer"
                        onClick={() => changeLanguage('pt')}>
                        Português
                    </button>
                    <h1 className="text-white mt-3">|</h1>
                    <button
                        className="text-green-500 font-bold hover:text-blue-700 cursor-pointer"
                        onClick={() => changeLanguage('ru')}>
                        Pусский
                    </button>
                    <h1 className="text-white mt-3">|</h1>
                    <button
                        className="text-green-500 font-bold hover:text-blue-700 cursor-pointer"
                        onClick={() => changeLanguage('ar')}>
                        العربية
                    </button>
                    <h1 className="text-white mt-3">|</h1>
                    <button
                        className="text-green-500 font-bold hover:text-blue-700 cursor-pointer"
                        onClick={() => changeLanguage('hi')}>
                        हिन्दी
                    </button>
                    <h1 className="text-white mt-3">|</h1>
                    <button
                        className="text-green-500 font-bold hover:text-blue-700 cursor-pointer"
                        onClick={() => changeLanguage('zh')}>
                        官话
                    </button>
                </div>
                {/*Enlaces extras */}
                <h1 className="text-white font-bold mt-5">Follow Us: <a href="https://www.ejemplo.com" className="text-yellow-300 font-bold">Higher or Lower Game</a></h1>
                <div className="flex space-x-2 text-sm text-green-500 underline mt-5">
                    <Link>How to play</Link>
                    <h1 className="text-white">|</h1>
                    <Link>Language selector</Link>
                    <h1 className="text-white">|</h1>
                    <Link>Download app</Link>
                    <h1 className="text-white">|</h1>
                    <Link>Contact us</Link>
                    <h1 className="text-white">|</h1>
                    <Link>About us</Link>
                    <h1 className="text-white">|</h1>
                    <Link>News</Link>
                    <h1 className="text-white">|</h1>
                    <Link>Our Ambassadors</Link>
                    <h1 className="text-white">|</h1>  
                    <Link>Media Assets</Link>
                    <h1 className="text-white">|</h1>
                    <Link>Privacy Policy </Link>
                </div>
            </div>
        </div>

    )
}
export default HomePage