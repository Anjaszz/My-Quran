export default function ListAyat(props) {
    return (
    <div className="pb-24">
  {props.surah.ayat.map((ayat) => (
    <div className="my-6 mx-4 p-4" key={ayat.nomor}>
      <div className="flex items-center mb-4">
        <div className=" p-2  w-8 h-8 flex items-center justify-center mr-4">
          <span className="text-xl font-semibold">{ayat.nomor}</span>
        </div>
        <div className="flex-grow flex justify-end">
          <h3 className="text-primary text-2xl font-arabic">{ayat.ar}</h3>
        </div>
      </div>
      <div className="mb-4 px-2">
        <p className="text-gray-700 font-serif text-lg">{ayat.tr}</p>
      </div>
      <div className="px-2 text-gray-500 font-serif text-sm">
        <p>{ayat.idn}</p>
      </div>
    </div>
  ))}
</div>

      
    )
}
