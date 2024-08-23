export default function BannerSurah(props) {
    return (
        <div className="bg-gradient-to-br from-green-600 to-green-200 text-white rounded-2xl text-center relative overflow-hidden p-8 shadow-lg mx-auto w-[90%]">
        <h3 className="font-normal text-2xl mt-7">{props.surah.nama_latin}</h3>
        <h4 className="font-medium text-sm">{props.surah.arti}</h4>
        <span className="block h-[1px] w-2/3 bg-white opacity-35 my-4 mx-auto"></span>
        <p className="text-xs uppercase mb-5">{props.surah.tempat_turun} - {props.surah.jumlah_ayat} Ayat</p>
        <img src="/bismillah.svg" alt="Bismillah" className="absolute top-3 left-1/2  transform -translate-x-1/2 " />
        <img src="/quran.svg" alt="Quran" className="absolute right-[-10%] bottom-[-20%] opacity-20" />
    </div>
    
    )
}
