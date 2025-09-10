import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";

export default function Favorites() {
    const navigate = useNavigate();
    const { favorites, toggleFavorite } = useContext(FavoritesContext);

    document.title = 'Favorit Surah - My Al-Quran';

    const detailSurah = (no_surah) => {
        navigate(`/surah/${no_surah}`);
    };

    const handleFavoriteClick = (e, surah) => {
        e.stopPropagation();
        toggleFavorite(surah);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-500 text-white py-4 flex items-center ">
                <div className=" px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4">
                        <button 
                            onClick={() => navigate('/home')}
                            className="p-2 hover:bg-green-700 rounded-full transition duration-200"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                            </svg>
                        </button>
                        <div>
                            <h1 className="text-3xl font-bold">Surah Favorit</h1>
                            <p className="text-green-100 mt-1">Kumpulan surah yang telah Anda simpan</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {favorites.length === 0 ? (
                    <div className="text-center py-16">
                        <div className="mb-6">
                            <svg className="w-24 h-24 text-gray-300 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-medium text-gray-900 mb-2">Belum Ada Surah Favorit</h3>
                        <p className="text-gray-600 mb-6">Mulai menambahkan surah favorit Anda dengan menekan tombol hati di daftar surah.</p>
                        <button
                            onClick={() => navigate('/home')}
                            className="bg-gradient-to-r from-green-600 to-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-600 transition duration-200"
                        >
                            Jelajahi Surah
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold text-gray-900">
                                {favorites.length} Surah Tersimpan
                            </h2>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {favorites.map((s) => (
                                <div
                                    className="flex items-center justify-between border border-gray-300 cursor-pointer p-4 rounded-lg bg-white shadow-md hover:bg-gray-50 transition duration-200"
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
                                            className="p-2 rounded-full transition duration-200 text-red-500 hover:text-red-600"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}