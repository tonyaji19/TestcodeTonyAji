"use client";

import { useState } from "react";
import axios from "axios";

export default function Component() {
  const [dataSiswa, setDataSiswa] = useState([]);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get("https://localhost:7168/api/Siswa");
      setDataSiswa(response.data);
    } catch (error) {
      setError("Failed to fetch data");
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-2xl font-bold mb-4">Data Siswa</h1>

      <button
        onClick={fetchData}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Fetch Data Siswa
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {dataSiswa.map((siswa) => (
          <div key={siswa.id} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{siswa.nama}</h2>
            <p className="text-gray-600">ID: {siswa.id}</p>
            <p className="text-gray-600">Kelas: {siswa.kelas}</p>
            <p className="text-gray-600">Umur: {siswa.umur}</p>
            <p className="text-gray-600">Wali Kelas: {siswa.waliKelas}</p>
            <p className="text-gray-600">Asal Kota: {siswa.asalKota}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center text-center">
        {dataSiswa.map((siswa) => (
          <div key={siswa.id} className="shadow-xl p-12 my-20 mx-12">
            <p>{siswa.nama}</p>
            <p>{siswa.kelas}</p>
            <p>{siswa.umur}</p>
            <p>{siswa.waliKelas}</p>
            <p>{siswa.asalKota}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
