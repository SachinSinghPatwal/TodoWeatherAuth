import React, { useEffect, useState } from "react";
import { CheckSquare, DoorClosed, DoorOpen, Square } from "lucide-react";
import RightSidebar from "./RightSidebar.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  setDetailedInfoVisibility,
  updateCompletedTasks,
  updateInDoorTasks,
} from "../Store/Slice.js";
import AddTodos from "./AddTodos.jsx";

function AllTodos() {
  const today = new Date();
  const [selectedTask, setSelectedTask] = useState("");
  const allTasks = useSelector((state) => state.SingleSourceOfTruthSlice.tasks);
  const detailedInfoVisibility = useSelector(
    (state) => state.SingleSourceOfTruthSlice.detailedInfoVisibility
  );
  const tasksShowingType = useSelector(
    (state) => state.SingleSourceOfTruthSlice.tasksShowingType
  );
  const dispatch = useDispatch();

  const inDoorTasks = allTasks.filter((task) => task.inDoor);
  const completedTasks = allTasks.filter((task) => task.completed);

  const todaysTasks = allTasks.filter((task) => {
    const taskDate = new Date(task.id); // Ensure it's a Date object
    return (
      taskDate.getFullYear() === today.getFullYear() &&
      taskDate.getMonth() === today.getMonth() &&
      taskDate.getDate() === today.getDate()
    );
  });

  const gridTaskList = useSelector(
    (state) => state.SingleSourceOfTruthSlice.gridTaskList
  );

  const weatherInfo = useSelector(
    (state) => state.SingleSourceOfTruthSlice.aboutWeather
  );
  const renderTemperature = () => {
    const kelvin = weatherInfo?.main?.temp;
    if (typeof kelvin === "number") {
      const celsius = (kelvin - 273.15).toFixed(1);
      return `Temp: ${celsius}°C ---- ${weatherInfo?.weather[0]?.main}`;
    }
    return "City Name Required";
  };
  useEffect(() => {
    console.log(weatherInfo);
    renderTemperature();
  }, [weatherInfo]);

  return (
    <div className="w-full h-full">
      <div
        className={`lg:grid grid-flow-col 
          ${detailedInfoVisibility ? "grid-cols-[auto_21vw]" : "grid-flow-col"}
        xl:gap-[1rem] gap-[.25rem]`}
      >
        <div className="w-full">
          <AddTodos />
          <div
            className={`space-y-2 grid
          ${
            gridTaskList
              ? "xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[.5rem]"
              : ""
          } 
          `}
          >
            {(tasksShowingType === "All Tasks"
              ? allTasks
              : tasksShowingType === "Today's"
              ? todaysTasks
              : tasksShowingType === "In Door Task"
              ? inDoorTasks
              : completedTasks
            ).map((task) => (
              <div
                key={task.id}
                className={`grid items-center relative
                  grid-flow-col
                  ${
                    gridTaskList
                      ? "border border-gray-400 h-[6rem] dark:border-[#2F3630] p-1"
                      : "border-b-[1px] border-gray-300 p-3"
                  }
                  justify-between    
                  hover:cursor-pointer duration-500 transition-colors `}
                onClick={() => {
                  dispatch(setDetailedInfoVisibility(true));
                  setSelectedTask(task);
                }}
              >
                <div className="grid items-center grid-flow-col gap-[.25rem]">
                  <button
                    className="mr-3 flex-shrink-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(
                        updateCompletedTasks({
                          id: task.id,
                          status: !task.completed,
                        })
                      );
                    }}
                  >
                    {task.completed ? (
                      <CheckSquare className="h-5 w-5 text-green-600" />
                    ) : (
                      <Square className="h-5 w-5 text-orange-400 " />
                    )}
                  </button>
                  <input
                    type="text"
                    value={task.text}
                    className={`flex-1 outline-none  hover:cursor-pointer ${
                      task.completed
                        ? "line-through text-gray-400 dark:text-white"
                        : ""
                    }
                    
                    `}
                  />
                </div>
                <div
                  className={`absolute text-gray-400 dark:text-white  ${
                    gridTaskList ? "left-10 top-0" : "left-[50%] top-50%"
                  }  text-[14px]`}
                >
                  {!task.inDoor ? (
                    <span className="md:inline hidden">
                      {!task.indoor ? renderTemperature() : null}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <button
                  className="ml-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(
                      updateInDoorTasks({
                        id: task.id,
                        status: !task.inDoor,
                      })
                    );
                  }}
                >
                  {task.inDoor ? (
                    <DoorClosed className="h-6 w-7 text-green-500 hover:cursor-grab" />
                  ) : (
                    <DoorOpen className="h-6 w-7 text-orange-500 hover:cursor-grab" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
        {detailedInfoVisibility && (
          <div className="min-h-full bg-[#DCECDE] dark:bg-[#2C2C2C] rounded-[5px] ">
            <RightSidebar selectedTask={selectedTask} />
          </div>
        )}
      </div>
    </div>
  );
}

export default AllTodos;
