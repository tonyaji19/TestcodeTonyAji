"use client";

import { useState } from "react";
import EmployeeForm from "./EmployeeForm";
import Modal from "./Modal";

export default function EmployeeTable({
  employees,
  onDelete,
  onEdit,
  onSubmit,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [employeeToEdit, setEmployeeToEdit] = useState(null);

  const filteredEmployees = employees.filter((employee) =>
    employee.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddEmployee = () => {
    setEmployeeToEdit(null);
    setIsModalOpen(true);
  };

  const handleEditEmployee = (employee) => {
    setEmployeeToEdit(employee);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-[7%] bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-2xl mb-4 font-bold text-gray-800">
          Daftar Karyawan
        </h2>
        <div className="flex items-center justify-between pt-2 mb-4">
          <input
            type="text"
            placeholder="Cari karyawan..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-sm px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300"
          />
          <button
            onClick={handleAddEmployee}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg ml-4"
          >
            Tambah Karyawan
          </button>
        </div>
      </div>
      <div className="overflow-x-auto p-8">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Nama</th>
              <th className="px-4 py-2 text-left">Jabatan</th>
              <th className="px-4 py-2 text-left">Nomor</th>
              <th className="px-4 py-2 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((employee) => (
              <tr
                key={employee.id}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="px-4 py-2">{employee.nama}</td>
                <td className="px-4 py-2">{employee.jabatan}</td>
                <td className="px-4 py-2">{employee.nomor}</td>
                <td className="px-4 py-2 text-center">
                  <button
                    onClick={() => handleEditEmployee(employee)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold mr-2 py-1 px-3 rounded text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(employee.id)}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded text-sm"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <EmployeeForm
          onSubmit={(newEmployee) => {
            onSubmit(newEmployee);
            setIsModalOpen(false);
          }}
          employeeToEdit={employeeToEdit}
          onEdit={(updatedEmployee) => {
            onEdit(updatedEmployee);
            setIsModalOpen(false);
          }}
        />
      </Modal>
    </div>
  );
}
