import React from 'react';

const EmployeeCard = ({ employee, onDelete, onEdit, onViewDetails }) => {
  return (
    <div className="employee-card">
      <img src={employee.profile_image} alt={employee.employee_name} />
      <h3>{employee.employee_name}</h3>
      <p>Salary: ${employee.employee_salary}</p>
      <p>Age: {employee.employee_age}</p>
      <button onClick={() => onDelete(employee.id)}>Delete</button>
      <button onClick={() => onEdit(employee.id)}>Edit</button>
      <button onClick={() => onViewDetails(employee.id)}>View Details</button>
    </div>
  );
};

export default EmployeeCard;
