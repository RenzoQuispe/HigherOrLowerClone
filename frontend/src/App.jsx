import { Route, Routes, Router } from "react-router"
import GooglePage from "./pages/GooglePage"
import HomePage from "./pages/HomePage"
import IMDBPage from "./pages/IMDBPage"
import SpotifyPage from "./pages/SpotifyPage"
import { Toaster } from "react-hot-toast"


function App() {

  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/google" element={<GooglePage/>}/>
          <Route path="/imdb" element={<IMDBPage />} />
          <Route path="/spotify" element={<SpotifyPage />} />
        </Routes>
        <Toaster />
      </div>
    </div>
  )
}

export default App
