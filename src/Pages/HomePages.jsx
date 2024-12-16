import React, {useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../redux/Slices/TaskSlices";

const HomePages = () => {
  const dispatch = useDispatch();
  const { tasks,} = useSelector((state) => state.tasks);
  const [loading , setLoading] = useState(true);

// for fetch task data
  useEffect(() => {
    setLoading(false)

    if(tasks.length === 0){
    dispatch(fetchTasks());
    setLoading(true)

    }
  },[dispatch,tasks]);

// loading
if(loading) return <p className="flex justify-center items-center w-full h-screen text-lg">Loading....</p>

  return (
    <div className="flex justify-center items-center flex-col w-full mt-8 gap-4">
      <h1 className="text-4xl font-bold mb-6 max-sm:text-3xl text-center">TO-DO List Manager</h1>
      <Link className="w-1/6 text-center bg-slate-500 p-2 rounded-md text-white max-sm:w-1/2" to="/add">Add Task</Link>

      <ul className=" flex justify-start items-start flex-col gap-4 w-2/4 max-lg:w-3/4 ">
        {tasks.map((item) => (
          <li key={item.id} className="flex justify-between items-start gap-2 w-full bg-slate-200 p-2 rounded-md max-sm:flex-col">
            <div>
            <h3 className="text-lg font-medium">Title: {item.title.split(' ').slice(0,2).join(' ')}</h3>
            <p className="font-semibold max-sm:text-sm">Description: <span className="text-[13px] font-medium text-gray-600">{item.description ? item.description : item.title}</span></p>
            </div>
            <div className="flex justify-center items-center">
              <p className=" font-medium pb-2 max-md:text-base">Status: </p>
            <p className="px-1 mr-8 pb-2 max-sm:mr-2" style={{color:item.completed ? 'green': 'red'}}>{item.completed ? "completed" : "Incompleted"}</p>
            <Link className="ml-6 px-3 text-center bg-cyan-500 p-1 rounded-md text-white" to={`/edit/${item.id}`}>Edit</Link>
            </div>
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePages;
