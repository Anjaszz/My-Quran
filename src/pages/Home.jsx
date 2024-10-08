import { useEffect, useRef, useState } from 'react'
import HeaderHome from '../components/Home/HeaderHome'
import BannerHome from '../components/Home/BannerHome'
import Loading from '../components/Loading'
import ListSurahHome from '../components/Home/ListSurah'
import { AppContext } from '../context/AppContext'

export default function Home() {
    const [surah, setSurah] = useState([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('')
    const [lastRead, setLastRead] = useState({})

    const sidebar = useRef('')
    const searchInput = useRef('')

    document.title = 'My Al-Quran'

    useEffect(() => {
        async function getAllSurah() {
            const request = await fetch('https://equran.id/api/surat');
            const response = await request.json();

            setSurah(response)
            setLoading(false)
        }

        getAllSurah()

        const lastSurah = JSON.parse(localStorage.getItem('lastRead'));
        lastSurah ? setLastRead(lastSurah) : setLastRead({})
    }, []);

    const data = {
        sidebar,
        searchInput,
        lastRead,
        search,
        setSearch,
        surah
    }

    return (
        <AppContext.Provider value={data}>
            <HeaderHome />
            <BannerHome />
            {loading ? <Loading /> : <ListSurahHome />}
        </AppContext.Provider>
    )
}