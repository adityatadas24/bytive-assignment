import React, { useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateTask } from '../redux/Slices/TaskSlices';

const EditTask = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const task = useSelector((state) => state.tasks.tasks.find((t) => t.id === parseInt(id)));

  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

  // edit or update task status
  const handleSubmits = (e) => {
    e.preventDefault();
    dispatch(updateTask({ ...task, completed: status }));
    navigate('/');
  };

  if (!task) {
    return <p>Loading task...</p>;
  }

  return (
    <div className="flex justify-center items-center flex-col w-full mt-10">
      <h1 className="text-4xl font-bold mb-10 max-sm:text-3xl text-center">Edit Task</h1>
      <div className=" flex justify-center items-center w-2/3">

    <form onSubmit={handleSubmits} className="flex justify-center items-start gap-4 flex-col w-2/4 max-lg:w-3/4 max-sm:w-11/12">   
      <p className='text-lg font-semibold'>Title: {task.title}</p>
      <label className="flex justify-start items-center gap-2 font-semibold">
        Completed:
        <input type="checkbox"  className="mt-1" checked={status} onChange={(e) => setStatus(e.target.checked)} />
      </label>
      <button className=" bg-sky-600 text-white p-2 px-4 rounded-lg w-full" type="submit">Update Task</button>
    </form>
    </div>
    </div>
  );
};

export default EditTask;
