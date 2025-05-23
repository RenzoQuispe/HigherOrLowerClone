import { create } from "zustand"
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";

export const estadoMovies = create((set, get) => ({
    movie1: null,
    movie2: null,
    puntaje: 0,
    perdio: false,
    getRandomMovie1: async () => {
        try {
            const res = await axiosInstance.get("/movies/random_movie");
            console.log("movie1:",res.data)
            set({ movie1: res.data }); // ← guarda la película en el estado
        } catch (err) {
            console.error(err);
            toast.error("Error al obtener película");
        }
    },
    getRandomMovie2: async () => {
        try {
            const res = await axiosInstance.get("/movies/random_movie");
            console.log("movie2:",res.data)
            set({ movie2: res.data }); // ← guarda la película en el estado
        } catch (err) {
            console.error(err);
            toast.error("Error al obtener película");
        }
    },
}))