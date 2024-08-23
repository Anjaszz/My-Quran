import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";

export default function HeaderHome() {
    const apps = useContext(AppContext);

    const handleSearchSurah = (e) => {
        apps.setSearch(e.target.value.toLowerCase());
    };

    return (
        <div className="bg-[#88D66C] h-full p-4">
            <div className="text-[#F7F9F2] font-bold text-4xl flex justify-center">
                <Link to="/">My Al-Quran</Link>
            </div>
            <div className="flex justify-center mt-14">
                <div className="flex items-center border-2 border-gray-200 rounded-lg p-2 w-full max-w-md">
                    <img src="/search-line.svg" alt="Search" className="w-5 h-5 mr-2 text-white" />
                    <input
                        type="text"
                        placeholder="Search Surah..."
                        onChange={handleSearchSurah}
                        className="bg-[#88D66C] w-full text-white focus:outline-none placeholder-white"
                    />
                </div>
            </div>
        </div>

    );
}
