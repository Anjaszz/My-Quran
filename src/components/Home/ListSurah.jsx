import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

export default function ListSurahHome() {
    const navigate = useNavigate();
    const apps = useContext(AppContext);

    const detailSurah = (no_surah) => {
        navigate(`/surah/${no_surah}`);
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
                        <div className="text-primary text-lg font-medium">{s.nama}</div>
                    </div>
                ))}
        </div>
    );
}
