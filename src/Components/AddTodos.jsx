import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setTasks } from "../Store/Slice";
import axios from "axios";
import { setAboutWeather } from "../Store/Slice.js";
function AddTodos() {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");
  const [placeholder, setPlaceholder] = useState("City Name + Enter");
  const addTask = () => {
    setNewTask("");
    if (newTask.trim()) {
      dispatch(
        setTasks({
          id: Date.now(),
          text: newTask,
          completed: false,
          inDoor: false,
        })
      );
    }
  };
  const [weather, setWeather] = useState("");
  function getWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
      import.meta.env.VITE_API_KEY
    }`;
    axios.get(apiUrl).then((res) => {
      setWeather(res);
    });
  }
  useEffect(() => {
    dispatch(setAboutWeather(weather.data));
    console.log(weather.data);
  }, [weather]);
  return (
    <div>
      <div className="mb-6 bg-[#DCECDE] dark:bg-[#2F3630] h-[10rem] rounded-[2px] xl:pl-[1rem] ">
        <div className="p-3 grid grid-rows-[60%_40%] h-full ">
          <input
            type="text"
            placeholder="Add A Task"
            className="flex-1 outline-none xl:w-fit w-full dark:placeholder:text-white placeholder:tracking-wide"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
          />
          <div className="grid grid-flow-col justify-between items-center">
            <div className="grid grid-flow-col gap-[1.5rem] items-center">
              <input
                type="text"
                placeholder={weather.data?.name || placeholder}
                className="outline-none xl:w-fit w-full dark:placeholder:text-white placeholder:tracking-wide"
                onKeyDown={(e) => {
                  if (e.key == "Enter" && e.target.value.length >= 3) {
                    getWeather(e.target.value);
                    e.target.value = "";
                  } else if (e.key == "Enter" && e.target.value.length < 3) {
                    e.target.value = "";
                    setPlaceholder("Invalid City");
                  }
                }}
              />
            </div>
            <button
              className="text-[#48864A] dark:text-white xl:px-3 xl:py-1 rounded text-sm
                  bg-[#CCDFCE] dark:bg-[#347237]  hover:cursor-pointer hover:bg-[#7bbd7e] transition-colors duration-200"
              onClick={addTask}
            >
              ADD TASK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTodos;
