import React, { useState } from "react";
import {
  X,
  Trash2,
  Notebook,
  ThermometerSun,
  ThermometerSnowflake,
  CloudRainWind,
  CloudFog,
  Axis3D,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeTasks,
  setDetailedInfoVisibility,
  setGridTaskList,
} from "../Store/Slice";
function RightSidebar({ selectedTask }) {
  const dispatch = useDispatch();
  const weatherInfo = useSelector(
    (state) => state.SingleSourceOfTruthSlice.aboutWeather
  );
  const options = [
    {
      icon: <Notebook className="h-5 w-5 text-gray-400 dark:text-white mr-3" />,
      text: weatherInfo?.weather[0]?.description,
    },
    {
      icon: <CloudFog className="h-5 w-5 text-gray-400 dark:text-white mr-3" />,
      text: `Visibility - ${weatherInfo?.visibility / 1000} Km`,
    },
    {
      icon: (
        <CloudRainWind className="h-5 w-5 text-gray-400 dark:text-white mr-3" />
      ),
      text: `Humidity - ${weatherInfo?.main?.humidity}%`,
    },
    {
      icon: (
        <ThermometerSun className="h-5 w-5 text-gray-400 dark:text-white mr-3" />
      ),
      text: `Max Temperature - ${(
        parseInt(weatherInfo?.main?.temp_max) - 273.15
      ).toFixed(2)} °C`,
    },
    {
      icon: (
        <ThermometerSnowflake className="h-5 w-5 text-gray-400 dark:text-white mr-3" />
      ),
      text: `Min Temperature - ${(
        parseInt(weatherInfo?.main?.temp_min) - 273.15
      ).toFixed(2)} °C`,
    },
    {
      icon: <Axis3D className="h-5 w-5 text-gray-400 dark:text-white mr-3" />,
      text: `lat--lon - ${
        weatherInfo?.coord.lat + "--" + weatherInfo?.coord.lon
      }`,
    },
  ];
  const [calenderToggle, setCalenderToggle] = useState(false);
  return (
    <div className="w-full h-full px-4 pt-[.5rem] pb-2 grid grid-rows-[95%_5%] relative">
      <div className=" w-full">
        <h1 className="mb-[.5rem]">Weather Info</h1>
        <hr className="h-[1px] bg-gray-600 border-none" />
        {options.map((each, index) => (
          <div
            key={index}
            className={`grid items-center hover:cursor-pointer 
              border-b border-gray-400 dark:border-gray-600 min-h-[2.5rem]`}
            onClick={() => {
              each.text == "Add Due Date" && setCalenderToggle((prev) => !prev);
            }}
          >
            <div className="grid ">
              <div className="grid grid-flow-col justify-between items-center">
                <div className="grid grid-flow-col items-center">
                  <span>{each.icon}</span>
                  <span>{each.text}</span>
                </div>
                <span>{each?.endIcon}</span>
              </div>
              {each.text == "Add Due Date" && (
                <div
                  className={`transition-all duration-200 block ${
                    !calenderToggle && "hidden"
                  } grid place-items-center`}
                ></div>
              )}
            </div>
          </div>
        ))}
      </div>
      <hr className="border-none bg-gray-500 dark:bg-gray-600 mb-[.5rem] h-[.5px] absolute w-full bottom-[9%]" />
      <div className="flex w-full justify-between items-center mb-[.5rem]">
        <div className="flex items-center">
          <button
            className="w-5 h-5 flex items-center justify-center rounded-sm hover:cursor-pointer 
            border-[1px] text-black hover:text-white border-black hover:bg-black transition-colors 
            duration-200 dark:border-white dark:hover:bg-white dark:hover:text-black group"
            onClick={() => {
              dispatch(setDetailedInfoVisibility(false));
            }}
          >
            <X className="h-3 w-3 text-inherit dark:text-white dark:group-hover:text-black" />
          </button>
        </div>
        <div className="text-sm text-gray-500 dark:text-white">
          Created At : {new Date(selectedTask.id).toLocaleString()}
        </div>
        <button
          className="grid place-item-center w-5 h-5 hover:cursor-pointer group"
          onClick={() => {
            dispatch(setDetailedInfoVisibility(false));
            dispatch(removeTasks(selectedTask.id));
          }}
        >
          <Trash2 className="w-full h-full text-black hover:text-red-500 transition-colors duration-200 dark:text-white dark:group-hover:text-red-500" />
        </button>
      </div>
    </div>
  );
}

export default RightSidebar;
