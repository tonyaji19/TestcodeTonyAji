import { useState } from "react";

const SiswaForm = ({ onSubmit, initialData = {} }) => {
  const [nama, setNama] = useState(initialData.nama || "");
  const [kelas, setKelas] = useState(initialData.kelas || "");
  const [umur, setUmur] = useState(initialData.umur || 0);
  const [waliKelas, setWaliKelas] = useState(initialData.waliKelas || "");
  const [asalKota, setAsalKota] = useState(initialData.asalKota || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ nama, kelas, umur, waliKelas, asalKota });
  };

  const handleClear = () => {
    // Reset all fields to their initial state
    setNama("");
    setKelas("");
    setUmur(0);
    setWaliKelas("");
    setAsalKota("");
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-[10%] bg-white shadow-lg rounded-lg overflow-hidden ">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800">Form Siswa</h2>
      </div>
      <div className="px-6 py-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Nama</label>
            <input
              type="text"
              placeholder="Nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300"
            />
          </div>

          <div>
            <label className="block text-gray-700">Kelas</label>
            <input
              type="text"
              placeholder="Kelas"
              value={kelas}
              onChange={(e) => setKelas(e.target.value)}
              className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300"
            />
          </div>

          <div>
            <label className="block text-gray-700">Umur</label>
            <input
              type="number"
              placeholder="Umur"
              value={umur}
              onChange={(e) => setUmur(e.target.value)}
              className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300"
            />
          </div>

          <div>
            <label className="block text-gray-700">Wali Kelas</label>
            <input
              type="text"
              placeholder="Wali Kelas"
              value={waliKelas}
              onChange={(e) => setWaliKelas(e.target.value)}
              className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300"
            />
          </div>

          <div>
            <label className="block text-gray-700">Asal Kota</label>
            <input
              type="text"
              placeholder="Asal Kota"
              value={asalKota}
              onChange={(e) => setAsalKota(e.target.value)}
              className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleClear}
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-md focus:outline-none mr-2"
            >
              Clear
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-md focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SiswaForm;
