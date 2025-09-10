import { createContext, useState, useEffect } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const savedFavorites = localStorage.getItem('quran-favorites');
        if (savedFavorites) {
            setFavorites(JSON.parse(savedFavorites));
        }
    }, []);

    const addToFavorites = (surah) => {
        const newFavorites = [...favorites, surah];
        setFavorites(newFavorites);
        localStorage.setItem('quran-favorites', JSON.stringify(newFavorites));
    };

    const removeFromFavorites = (surahNumber) => {
        const newFavorites = favorites.filter(fav => fav.nomor !== surahNumber);
        setFavorites(newFavorites);
        localStorage.setItem('quran-favorites', JSON.stringify(newFavorites));
    };

    const isFavorite = (surahNumber) => {
        return favorites.some(fav => fav.nomor === surahNumber);
    };

    const toggleFavorite = (surah) => {
        if (isFavorite(surah.nomor)) {
            removeFromFavorites(surah.nomor);
        } else {
            addToFavorites(surah);
        }
    };

    return (
        <FavoritesContext.Provider value={{
            favorites,
            addToFavorites,
            removeFromFavorites,
            isFavorite,
            toggleFavorite
        }}>
            {children}
        </FavoritesContext.Provider>
    );
};