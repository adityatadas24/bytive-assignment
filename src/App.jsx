import React from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePages from "./Pages/HomePages";
import AddTasks from "./Pages/AddTasks";
import EditTask from "./Pages/EditTask";

const App = () => {
  return (
    <div className="flex justify-center items-center w-full">
    
      <Router>
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/add" element={<AddTasks />} />
          <Route path="/edit/:id" element={<EditTask/>}/>
        </Routes>
      </Router>
    
    </div>
  );
};

export default App;
