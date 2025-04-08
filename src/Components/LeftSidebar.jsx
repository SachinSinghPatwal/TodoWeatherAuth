import React, { useState } from "react";
import {
  Calendar,
  CheckSquare,
  Clock,
  DoorClosed,
  SquareCheck,
  Star,
} from "lucide-react";
import personImage from "/pfp.png";
import { useDispatch, useSelector } from "react-redux";
import { setTasksShowingType } from "../Store/Slice";

function LeftSidebar() {
  const tasks = useSelector((state) => state.SingleSourceOfTruthSlice.tasks);
  const dispatch = useDispatch();

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  const completionPercentage =
    totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  const [selected, setSelected] = useState("All Tasks");
  const [hovered, setHovered] = useState(false);

  const navigationOptions = [
    { icon: <CheckSquare className="h-4 w-4 mr-3" />, text: "All Tasks" },
    { icon: <Calendar className="h-4 w-4 mr-3" />, text: "Today's" },
    { icon: <DoorClosed className="h-4 w-4 mr-3" />, text: "In Door Task" },
    { icon: <CheckSquare className="h-4 w-4 mr-3" />, text: "Completed" },
  ];

  return (
    <div className="w-fit flex flex-col pt-[6rem] bg-inherit">
      <div className="bg-[#dcecde] dark:bg-[#2C2C2C] px-[1rem] rounded-[5px] xl:w-full w-[200px] pb-[2rem]">
        <div className="pt-4">
          <div className="grid grid-flow-row justify-items-center mb-[.5rem]">
            <img
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              src={
                hovered
                  ? "https://i.pinimg.com/1200x/45/bb/1a/45bb1afa9e74f14f5474b0aa5e2e6acb.jpg"
                  : personImage
              }
              alt="Profile"
              className="h-[6rem] aspect-square object-cover rounded-full absolute top-[7rem] hover:cursor-pointer"
            />
            <div>
              <p className="font-normal mt-[3rem]">Hey, ABCD</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-2 bg-white dark:bg-[#232323] rounded-[5px]">
          <ul className="space-y-1">
            {navigationOptions.map((each) => (
              <li
                key={each.text}
                onClick={() => {
                  dispatch(setTasksShowingType(each.text));
                  setSelected(each.text);
                }}
                className={`flex items-center p-2 text-sm rounded-lg cursor-pointer ${
                  selected === each.text ? "bg-[#253026] text-green-600" : ""
                }`}
              >
                {each.icon}
                <span>{each.text}</span>
              </li>
            ))}
          </ul>
        </nav>

        {/* Task Stats with SVG */}
        <div className="p-4 bg-white dark:bg-[#232323] rounded-[5px] mt-2">
          <div className="text-sm">
            <p className="text-gray-600 dark:text-white">Today Tasks</p>
            <p className="text-2xl font-bold">{totalTasks}</p>
            <hr className="bg-gray-300 border-none h-[2px] mx-[-1rem] mt-[1rem] dark:bg-black" />
          </div>

          <div className="mt-4 relative w-full">
            <svg className="w-full h-full" viewBox="0 0 120 120">
              {/* Outer background ring */}
              <circle
                cx="60"
                cy="60"
                r="40"
                fill="none"
                stroke="#F28D1B"
                strokeWidth="10"
              />

              {/* Outer progress (green) */}
              <circle
                cx="60"
                cy="60"
                r="40"
                fill="none"
                stroke="#54F28F"
                strokeWidth="10"
                strokeDasharray="251.2"
                strokeDashoffset={251.2 - (completionPercentage * 251.2) / 100}
                transform="rotate(-90 60 60)"
              />
            </svg>
            <div className="grid justify-center">
              <div className="grid grid-flow-col justify-items-start w-fit gap-[.5rem] xl:gap-[2.5rem] mt-4">
                <div className="flex items-center">
                  <div className="w-2 h-2  bg-[#F28D1B] rounded-full mr-1"></div>
                  <span className="text-sm">
                    Pending: <br className="xl:hidden" />
                    <span className="text-[#F28D1B] font-semibold">
                      {totalTasks - completedTasks}
                    </span>
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#4dd952] rounded-full mr-1"></div>
                  <span className="text-sm">
                    Done: <br className="xl:hidden" />
                    <span className="text-[#4dd952] font-semibold">
                      {completedTasks}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
