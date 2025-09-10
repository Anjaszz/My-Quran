import { useNavigate } from "react-router-dom";

export default function Landing() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                    <div className="text-center">
                        <div className="mb-8">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-600 to-emerald-500 rounded-full mb-6">
                                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.5 2H5.5C4.12 2 3 3.12 3 4.5v15C3 20.88 4.12 22 5.5 22h13c1.38 0 2.5-1.12 2.5-2.5v-15C21 3.12 19.88 2 18.5 2zM12 4l3 3H9l3-3zm0 16l-3-3h6l-3 3zm5-8H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1z"/>
                                </svg>
                            </div>
                            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                                Al-Quran
                                <span className="block text-green-600">Digital</span>
                            </h1>
                            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
                                Baca, dengarkan, dan pelajari Al-Quran dengan mudah. 
                                Aplikasi modern untuk memperdalam pemahaman kitab suci.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <button
                                onClick={() => navigate('/home')}
                                className="bg-gradient-to-r from-green-600 to-emerald-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-green-700 hover:to-emerald-600 transform hover:scale-105 transition duration-200 shadow-lg"
                            >
                                Mulai Membaca
                            </button>
                          
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-10 left-10 w-32 h-32 bg-green-200 rounded-full opacity-20 blur-xl"></div>
                        <div className="absolute bottom-10 right-10 w-40 h-40 bg-emerald-200 rounded-full opacity-20 blur-xl"></div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Fitur Unggulan
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Dilengkapi dengan berbagai fitur untuk memudahkan ibadah dan pembelajaran
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="text-center p-6 rounded-xl bg-gradient-to-b from-green-50 to-green-100 hover:shadow-lg transition duration-200">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-4">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Teks Arab & Terjemahan</h3>
                            <p className="text-gray-600">Baca Al-Quran dengan teks Arab asli beserta terjemahan Indonesia yang akurat</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="text-center p-6 rounded-xl bg-gradient-to-b from-emerald-50 to-emerald-100 hover:shadow-lg transition duration-200">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-600 rounded-full mb-4">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Audio Murottal</h3>
                            <p className="text-gray-600">Dengarkan lantunan ayat suci dengan audio berkualitas tinggi dari qari terbaik</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="text-center p-6 rounded-xl bg-gradient-to-b from-teal-50 to-teal-100 hover:shadow-lg transition duration-200">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-600 rounded-full mb-4">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Bookmark & Progress</h3>
                            <p className="text-gray-600">Simpan ayat favorit dan lacak progress bacaan dengan fitur bookmark yang praktis</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="py-16 bg-gradient-to-r from-green-600 to-emerald-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                        <div>
                            <div className="text-4xl font-bold mb-2">114</div>
                            <div className="text-green-100">Surah</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">6,236</div>
                            <div className="text-green-100">Ayat</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">30</div>
                            <div className="text-green-100">Juz</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">∞</div>
                            <div className="text-green-100">Keberkahan</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer CTA */}
            <div className="py-16 bg-gray-900">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                        Mulai Perjalanan Spiritual Anda
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Bergabunglah dengan jutaan muslim di seluruh dunia dalam membaca Al-Quran
                    </p>
                    <button
                        onClick={() => navigate('/home')}
                        className="bg-gradient-to-r from-green-600 to-emerald-500 text-white px-10 py-4 rounded-xl text-xl font-semibold hover:from-green-700 hover:to-emerald-600 transform hover:scale-105 transition duration-200 shadow-xl"
                    >
                        Buka Al-Quran Sekarang
                    </button>
                </div>
            </div>
        </div>
    );
}