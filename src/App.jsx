import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import DetailSurah from './pages/Surah';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/surah/:nomor" element={<DetailSurah />} />
          </Routes>
          <Footer />
        </div>
      </FavoritesProvider>
    </BrowserRouter>
  );
}

export default App;
