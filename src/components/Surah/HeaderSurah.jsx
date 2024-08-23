import { Link } from "react-router-dom";

export default function HeaderSurah(props) {
    return (
        <div className="flex items-center justify-between p-2 mb-4">
            <div className="flex items-center">
                <Link to="/">
                    <img src="/back.svg" alt="Back" className="w-6 h-6" />
                </Link>
                <span className="ml-4 text-xl font-semibold">{props.surah.nama_latin}</span>
            </div>
        </div>
    )
}
