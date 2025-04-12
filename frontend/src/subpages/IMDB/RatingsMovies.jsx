import { Link } from "react-router";
import { useState , useEffect} from "react";
import botonAppStore from '../../assets/boton-app-store.svg';
import botonPlayStore from '../../assets/boton-google-play.png';
import logo from '../../assets/higher-or-lower-logo.svg';

import { estadoMovies } from "../../estados/estadoMovies";

function RatingsMovies() {
    const [jugar, setJugar] = useState(false);
    const [puntaje, setPuntaje] = useState(0);
    const [perdio, setPerdio] = useState(false);
    const { movie1, movie2, getRandomMovie1, getRandomMovie2 } = estadoMovies();

    const [mostrarRating1, setMostrarRating1] = useState(false)
    const [mostrarRating2, setMostrarRating2] = useState(false)

    const comenzarJuego = async () => {
        setPuntaje(0);
        await getRandomMovie1();
        await getRandomMovie2();
        setJugar(true);
    };

    useEffect(() => {
        const puntajeMasAlto = localStorage.getItem("highScore") || 0;
        if (puntaje > puntajeMasAlto) {
            localStorage.setItem("highScore", puntaje);
        }
    }, [puntaje]);

    const comparacion = async (movieClick) => {
        if (movieClick.title == movie1.title) {
            if (movieClick.rating >= movie2.rating) {
                await getRandomMovie2();
                setPuntaje(prevPuntaje => prevPuntaje + 1);
                setMostrarRating2(false)
            } else {
                setMostrarRating1(false)
                setMostrarRating2(false)
                setPerdio(true)
            }
        } else { //CLick en movie2
            if (movieClick.rating >= movie1.rating) {
                await getRandomMovie1();
                setPuntaje(prevPuntaje => prevPuntaje + 1);
                setMostrarRating1(false)
            } else {

                setMostrarRating1(false)
                setMostrarRating2(false)
                setPerdio(true)
                    ; // Usamos setPerdio para actualizar el estado
            }
        }
    }



    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center" style={{ backgroundColor: '#f4c519' }}>
            {!jugar ? (
                // 🟡 Pantalla de inicio (antes de JUGAR)
                <>
                    <div className="flex flex-col items-center w-[600px] h-[375px]">
                        <img src={logo} className="w-[200px] h-[200px] mt-8" alt="Logo" />
                        <h1 className="text-3xl font-bold mt-3">Adivina qué película tiene una calificación más alta en IMDb</h1>
                        <h2 className="mt-3">Un juego de mayor o menor usando estadísticas de IMDb. Datos actualizados en 2025.</h2>
                    </div>

                    <button
                        onClick={comenzarJuego}
                        className="text-center text-2xl font-bold bg-white w-[160px] h-[50px] mt-5 border-b-4 border-r-4 hover:border-none transition-all"
                    >
                        Jugar!
                    </button>

                    <Link className="mt-5">🏆 Leaderboard</Link>

                    <div className="flex flex-col items-center w-[800px] h-[300px] mt-5">
                        <Link to="/">🏠 Regresar al menú principal</Link>
                        <div className="flex space-x-4 mt-5">
                            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                                <img src={botonAppStore} alt="App Store" className="w-[135px] h-[65px]" />
                            </a>
                            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                                <img src={botonPlayStore} alt="Google Play" className="w-[135px] h-[65px]" />
                            </a>
                        </div>
                        <p className="mt-10 text-sm">No afiliado a IMDb.</p>
                    </div>
                </>
            ) : (
                !perdio ? (


                    // 🟢 Pantalla del juego (después de hacer clic en JUGAR)
                    < div className="w-full h-screen flex items-center justify-around">
                        {/* Contenido central */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center space-y-4 z-20">
                            <div className="bg-white text-5xl font-bold bg-black bg-opacity-50 px-6 py-6 rounded-full ">
                                OR
                            </div>
                            <div className="bg-black text-white text-xl p-1 rounded">
                                <h1>Puntaje Actual: {puntaje}</h1>
                                <h2>Puntaje Mas Alto: {localStorage.getItem("highScore") || 0}</h2>
                            </div>
                        </div>
                        {/* Película 1 */}
                        <button
                            className="relative w-1/2 h-full overflow-visible transition-all hover:brightness-70 animate__animated animate__fadeInDown"
                            onClick={() => {
                                setMostrarRating1(true); setMostrarRating2(true);
                                setTimeout(() => {
                                    comparacion(movie1);  // Se ejecuta después de 2 segundos (2000 ms)
                                }, 1250);
                            }}
                        >
                            {/* Imagen de fondo */}
                            <img
                                src={movie1.poster}
                                alt={movie1.title}
                                className="w-full h-full object-cover"
                            />

                            {/* Texto encima de la imagen */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 z-10">
                                <span className="text-3xl text-black font-bold px-4 py-2 bg-white bg-opacity-60 border-r-4 border-b-4">
                                    {movie1.title}
                                </span>
                                {
                                    mostrarRating1 && (
                                        <span className="text-3xl text-white px-4 py-2 bg-black bg-opacity-60">
                                            {movie1.rating}
                                        </span>)
                                }

                            </div>
                        </button>

                        {/* Película 2 */}
                        <button
                            className="relative w-1/2 h-full overflow-visible transition-all hover:brightness-70 animate__animated animate__fadeInUp"
                            onClick={() => {
                                setMostrarRating2(true); setMostrarRating1(true);
                                setTimeout(() => {
                                    comparacion(movie2);  // Se ejecuta después de 2 segundos (2000 ms)
                                }, 1250);
                            }}
                        >
                            {/* Imagen de fondo */}
                            <img
                                src={movie2.poster}
                                alt={movie2.title}
                                className="w-full h-full object-cover"
                            />

                            {/* Texto encima de la imagen */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 z-10">
                                <span className="text-3xl text-black font-bold px-4 py-2 bg-white bg-opacity-60 border-b-4 border-r-4">
                                    {movie2.title}
                                </span>
                                {
                                    mostrarRating2 && (
                                        <span className="text-3xl text-white px-4 py-2 bg-black bg-opacity-60">
                                            {movie2.rating}
                                        </span>
                                    )
                                }
                            </div>
                        </button>
                    </div>
                ) : (
                    // Perdio :c
                    <div style={{ backgroundColor: '#f4c519' }} className="w-full h-screen flex items-center justify-around">
                        <div className="h-[600px] flex flex-col items-center justify-center">
                            <h1 className="text-white font-bold text-2xl">Tu puntaje final es:</h1>
                            <div className="flex items-center justify-center text-5xl font-bold bg-white border-black border-b-4 border-r-4 h-20 w-15 mt-5">{puntaje}</div>
                            <button
                                onClick={() => {
                                    setPerdio(false);
                                    comenzarJuego(); // reinicia el juego
                                }}
                                className="relative text-center text-2xl text-white font-bold bg-blue-400 w-[200px] h-[50px] mt-3 border-b-4 border-black border-r-4 hover:border-none transition-all"
                            >
                                Jugar Otra Vez
                            </button>
                            <Link className="relative text-center text-2xl font-bold bg-green-400 w-[200px] h-[50px] mt-3 border-b-4 border-r-4 hover:border-none transition-all" >Leaderboard</Link>
                            <Link className="relative text-center text-2xl font-bold bg-yellow-200 w-[300px] h-[50px] mt-3 border-b-4 border-r-4 hover:border-none transition-all">Compartir Puntaje</Link>
                            {/*botones descarga movil*/}
                            <div className="flex space-x-4 mt-10">
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
                            <Link to='/imdb ' className="relative text-center text-2xl font-bold bg-white w-[200px] h-[50px] mt-10 border-b-4 border-r-4 hover:border-none transition-all">Mas Juegos</Link>
                            <h1 className="text-white font-bold mt-5">Follow Us: <a href="https://linktr.ee/higherorlowergame" className="text-black font-bold">Higher or Lower Game</a></h1>

                        </div>
                    </div>
                )

            )
            }
        </div >
    );

}

export default RatingsMovies;
