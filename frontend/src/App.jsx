import { Route, Routes, Router } from "react-router"
import GooglePage from "./pages/GooglePage"
import HomePage from "./pages/HomePage"
import IMDBPage from "./pages/IMDBPage"
import SpotifyPage from "./pages/SpotifyPage"
import { Toaster } from "react-hot-toast"

import RatingsMovies from "./subpages/IMDB/RatingsMovies"
import Artistas from "./subpages/spotify/Artistas"
import Albums from "./subpages/spotify/Albums"
import Canciones from "./subpages/spotify/Canciones"

function App() {

  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/google" element={<GooglePage />} />

          <Route path="/imdb" element={<IMDBPage />} />
          <Route path="/imdb/RatingsMovies" element={<RatingsMovies/>}/>
          
          <Route path="/spotify" element={<SpotifyPage />} />
          <Route path="/spotify/artistas" element={<Artistas/>}/>
          <Route path="/spotify/albums" element={<Albums/>}/>
          <Route path="/spotify/canciones" element={<Canciones/>}/>
        </Routes>
        <Toaster />
      </div>
    </div>
  )
}

export default App
