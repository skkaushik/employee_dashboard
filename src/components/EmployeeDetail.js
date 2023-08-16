import React from 'react';
import { useParams } from 'react-router-dom';


const EmployeeDetail = ({ employees }) => {
  const { id } = useParams();
  const employee = employees.find((emp) => emp.id === parseInt(id, 10));

  if (!employee) {
    return <div>No employee found with the provided ID.</div>;
  }

  return (
    <div className="employee-detail">
       
      <h2>Employee Details</h2>
      <div>
        <strong>Name:</strong> {employee.employee_name}
      </div>
      <div>
        <strong>Salary:</strong> ${employee.employee_salary}
      </div>
      <div>
        <strong>Age:</strong> {employee.employee_age}
      </div>
      <div>
        <img src={employee.profile_image} alt={employee.employee_name} />
      </div>
    </div>
  );
};

export default EmployeeDetail;
