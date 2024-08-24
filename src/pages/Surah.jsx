import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import 'react-h5-audio-player/lib/styles.css'
import HeaderSurah from "../components/Surah/HeaderSurah";
import BannerSurah from "../components/Surah/BannerSurah";
import Loading from "../components/Loading";
import ListAyat from "../components/Surah/ListAyat";
import MurotalSurah from "../components/Surah/Murotal";

export default function DetailSurah() {
    const params = useParams()

    const [surah, setSurah] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getSurah() {
            const request = await fetch(`https://equran.id/api/surat/${params?.nomor}`);
            const response = await request.json();
    
            setSurah(response);
            setLoading(false);
    
            document.title = `${response.nama_latin} | Quran App`;
    
            localStorage.setItem('lastRead', JSON.stringify({
                'nama_latin': response.nama_latin,
                'nomor': response.nomor
            }));
        }
    
        getSurah();
    }, [params.nomor]);

    return (
        <>
            <HeaderSurah surah={surah} />
            <BannerSurah surah={surah} />
            {loading ? <Loading /> : <ListAyat surah={surah} />}
            <MurotalSurah surah={surah} />
        </>
    )
}