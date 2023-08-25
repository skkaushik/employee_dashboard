import React, { useState, useEffect } from "react";
import axios from "axios";
import EmployeeCard from "./EmployeeCard";
import SearchBar from "./SearchBar";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  //Api call
  const fetchEmployees = async () => {
    try {
      const response = await axios.get(
        "https://dummy.restapiexample.com/api/v1/employees"
      );
      setEmployees(response.data.data);
    } catch (error) {
      console.error("Error fetching employee data:", error);
    }
  };

  // Handle delete logic
  const handleDelete = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };
  // Handle edit logic
  const handleEdit = (id) => {
    console.log(`Edit employee with ID: ${id}`);
  };

  // Navigate to Employee Detail component
  const handleViewDetails = (id) => {
    console.log(`View details for employee with ID: ${id}`);
  };

  return (
    <div className="employee-list">
       {/* <div><SearchBar/></div> */}
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onViewDetails={handleViewDetails}
        />
      ))}
    </div>
  );
};

export default EmployeeList;
