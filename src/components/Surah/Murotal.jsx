import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function Murotal(props) {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayClick = () => {
        setIsPlaying(true);
    };

    const handleCloseClick = () => {
        setIsPlaying(false);
    };

    return (
        <div className="fixed bottom-0 w-full">
            {!isPlaying ? (
                <div className="flex items-center justify-start h-32 pl-4">
                    <button
                        onClick={handlePlayClick}
                        className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full shadow-md focus:outline-none"
                    >
                        <img src="/play-icon.svg" alt="Play" className="w-16 h-16" />
                    </button>
                </div>
            ) : (
                <div className="relative overflow-hidden mt-12 w-full bg-[#88D66C] rounded-t-3xl h-52">
                    <button
                        onClick={handleCloseClick}
                        className="absolute top-1 right-2 bg-red-600 text-white rounded-full focus:outline-none h-8 w-8 mt-2 py2"
                    >
                        <span className="text-2xl font-bold">&times;</span>
                    </button>
                    <h2 className='text-md font-medium pt-3 pl-3'>Qari:</h2>
                    <h3 className='text-md font-medium text-gray-600 py-3 pl-3'>Misyari-Rasyid-Al-Afasi</h3>
                  
                    <AudioPlayer
                        className='bg-[#88D66C] shadow-none border-none text-white'
                        autoPlay={false}
                        src={props.surah.audio}
                        onPlay={() => console.log('Audio is playing')}
                    />
                </div>
            )}
        </div>
    );
}
