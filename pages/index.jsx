import { useState } from "react";
import EmployeeTable from "../components/EmployeeTable";
import employeesData from "../data/employees.json";

const Home = () => {
  const [employees, setEmployees] = useState(employeesData);

  const addEmployee = (newEmployee) => {
    const updatedEmployees = [
      ...employees,
      { ...newEmployee, id: employees.length + 1 },
    ];
    setEmployees(updatedEmployees);
  };

  const deleteEmployee = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  const editEmployee = (updatedEmployee) => {
    const updatedEmployees = employees.map((employee) =>
      employee.id === updatedEmployee.id ? updatedEmployee : employee
    );
    setEmployees(updatedEmployees);
  };

  return (
    <div>
      <EmployeeTable
        employees={employees}
        onDelete={deleteEmployee}
        onEdit={editEmployee}
        onSubmit={addEmployee} // Pastikan addEmployee digunakan di sini
      />
    </div>
  );
};

export default Home;
