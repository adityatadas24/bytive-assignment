import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux/Slices/TaskSlices";

const AddTasks = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // add new tasks
  function handleSubmit(e) {
    e.preventDefault();

    if (title.trim() !== "" && description.trim() !== "") {
      dispatch(
        addTask({ title, description, id: Date.now(), completed: status })
      );
      navigate("/");
    } else {
      setError("please fill up all fields");
    }
  }

  return (
    <div className="flex justify-center items-center flex-col w-full mt-10">
      <h1 className="text-4xl font-bold mb-6 max-sm:text-3xl text-center">
        Add Task
      </h1>
      <div className=" flex justify-center items-center w-2/3">
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-start flex-col w-2/4 max-lg:w-3/4 max-sm:w-11/12"
        >
          <label htmlFor="Title">Title:</label>
          <input
            className="w-full border-2 border-black p-2 rounded-lg mt-2"
            type="text"
            placeholder="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <label htmlFor="Desv">Desc:</label>
          <input
            className="w-full border-2 border-black p-2 rounded-lg mt-2"
            type="text"
            placeholder="description"
            name="desc"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <label
            htmlFor="Status"
            className="flex justify-start items-center gap-2"
          >
            Status:
            <input
              className="mt-1"
              type="checkbox"
              checked={status}
              onChange={(e) => setStatus(e.target.checked)}
            />
          </label>

          <br />
          {error && <p className="text-red-600 mb-2 text-center">{error}</p>}
          <button
            className=" bg-sky-600 text-white p-2 px-4 rounded-lg w-full"
            type="submit"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTasks;
