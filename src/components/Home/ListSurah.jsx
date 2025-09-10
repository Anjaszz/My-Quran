import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { FavoritesContext } from "../../context/FavoritesContext";

export default function ListSurahHome() {
    const navigate = useNavigate();
    const apps = useContext(AppContext);
    const { isFavorite, toggleFavorite } = useContext(FavoritesContext);

    const detailSurah = (no_surah) => {
        navigate(`/surah/${no_surah}`);
    };

    const handleFavoriteClick = (e, surah) => {
        e.stopPropagation();
        toggleFavorite(surah);
    };

    return (
        <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-2 mb-5">
            {apps.surah.filter((surah) => surah.nama_latin.toLowerCase().includes(apps.search))
                .map((s) => (
                    <div
                        className="flex items-center justify-between border border-gray-300 cursor-pointer p-4 rounded-lg bg-white shadow-md hover:bg-gray-200"
                        key={s.nomor}
                        onClick={() => detailSurah(s.nomor)}
                    >
                        <div className="flex items-center gap-4">
                        <div
      className="w-16 h-16 bg-cover bg-center rounded-full"
      style={{ backgroundImage: `url("/muslim.svg")` }}
    >
                                <span className="text-center flex items-center justify-center w-full h-full text-gray-600 font-semibold">{s.nomor}</span>
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-primary text-lg font-medium">{s.nama_latin}</h2>
                                <span className="text-gray-400 text-base uppercase">{s.tempat_turun} - {s.jumlah_ayat} Ayat</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="text-primary text-lg font-medium">{s.nama}</div>
                            <button
                                onClick={(e) => handleFavoriteClick(e, s)}
                                className={`p-2 rounded-full transition duration-200 ${
                                    isFavorite(s.nomor) 
                                        ? 'text-red-500 hover:text-red-600' 
                                        : 'text-gray-400 hover:text-red-500'
                                }`}
                            >
                                <svg className="w-5 h-5" fill={isFavorite(s.nomor) ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
        </div>
    );
}
