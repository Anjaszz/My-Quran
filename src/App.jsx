import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DetailSurah from './pages/Surah';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/surah/:nomor" element={<DetailSurah />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
