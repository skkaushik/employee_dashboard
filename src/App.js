import React from "react";
import { Route, Routes } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import EmployeeDetail from "./components/EmployeeDetail"; // Create this component

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<EmployeeList/>} />
        <Route path="/employee/:id" element={<EmployeeDetail/>} />
      </Routes>
      
    </>
  );
};

export default App;
