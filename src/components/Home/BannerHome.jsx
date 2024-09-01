import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function BannerHome() {
    const apps = useContext(AppContext);

    return (
        <div className="bg-gradient-to-br bg-gradient-to-r from-green-600 to-green-200 flex justify-center rounded-lg p-4 text-white relative overflow-hidden max-w-7xl mx-auto my-4">
            <div className="flex flex-col justify-between gap-4 p-4">
                <div className="flex items-center gap-2">
                    <img src="/read-logo.svg" alt="Icon Read" className="w-10 h-10" />
                    <h3 className="text-4xl font-semibold">Last Read</h3>
                </div>
                <div>
                    {Object.keys(apps.lastRead).length > 0 ? (
                        <>
                            <h3 className="sm:text-2xl text-3xl font-medium">{apps.lastRead.nama_latin}</h3>
                            <h5 className="sm:text-xl text-2xl font-normal">Surah No: {apps.lastRead.nomor}</h5>
                        </>
                    ) : (
                        <h3 className="text-xl font-medium">nothing has been <br /> read yet.</h3>
                    )}
                </div>
            </div>
            <div className="absolute right-4 bottom-4">
    <img 
        src="/quran.svg" 
        alt="Quran" 
        className="w-36 h-34 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-34" 
    />
</div>

        </div>
    );
}
