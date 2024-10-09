import { useState, useEffect } from "react";

const EmployeeForm = ({ onSubmit, employeeToEdit, onEdit }) => {
  const [nama, setNama] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [nomor, setNomor] = useState("");

  useEffect(() => {
    if (employeeToEdit) {
      setNama(employeeToEdit.nama);
      setJabatan(employeeToEdit.jabatan);
      setNomor(employeeToEdit.nomor);
    } else {
      setNama("");
      setJabatan("");
      setNomor("");
    }
  }, [employeeToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employeeToEdit) {
      onEdit({ ...employeeToEdit, nama, jabatan, nomor });
    } else {
      onSubmit({ nama, jabatan, nomor });
    }
    setNama("");
    setJabatan("");
    setNomor("");
  };

  return (
    <div className="px-6 py-4 border-b border-gray-200">
      <h2 className="text-2xl mb-4 font-bold text-gray-800 text-center">
        {employeeToEdit ? "Edit Karyawan" : "Tambah Karyawan"}
      </h2>
      <form onSubmit={handleSubmit} className="flex gap-4 px-2">
        <input
          type="text"
          placeholder="Nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          required
          className="w-full max-w-md mx-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300"
        />
        <input
          type="text"
          placeholder="Jabatan"
          value={jabatan}
          onChange={(e) => setJabatan(e.target.value)}
          required
          className="w-full max-w-md mx-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300"
        />
        <input
          type="number"
          placeholder="Nomor"
          value={nomor}
          onChange={(e) => setNomor(e.target.value)}
          required
          className="w-full max-w-md mx-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300"
        />
        <button
          type="submit"
          className="w-full max-w-md mx-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-2 rounded-md"
        >
          {employeeToEdit ? "Update Karyawan" : "Tambah Karyawan"}
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
