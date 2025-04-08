import LeftSidebar from "./Components/LeftSidebar";
import AllTodos from "./Components/AllTodos";

import { Menu } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  setLoggedIn,
  setProfileAndNavigationVisibilityToggle,
} from "./Store/Slice";
import { useEffect } from "react";
import ToggleListSize from "./Components/Svg's/ToggleListSize";
import ThemeToggler from "./Components/Svg's/ThemeToggler";
export default function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.SingleSourceOfTruthSlice.theme);
  const profileAndNavigationVisibilityToggle = useSelector(
    (state) =>
      state.SingleSourceOfTruthSlice.profileAndNavigationVisibilityToggle
  );
  const loggedStatus = useSelector(
    (state) => state.SingleSourceOfTruthSlice.loggedIn
  );

  useEffect(() => {
    const parentElement = document.querySelector("html");
    if (theme) {
      parentElement.classList.add("dark");
    } else {
      parentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <div
      className={`${
        !loggedStatus ? "max-h-screen overflow-hidden" : "h-fit"
      } grid place-items-center relative`}
    >
      <div
        className={`fixed ${
          loggedStatus ? "hidden" : "block"
        } inset-0 backdrop-blur-xl z-100 grid place-items-center`}
      >
        <button
          className="bg-gray-400 p-3 rounded-[5px] w-[9rem] hover:cursor-pointer"
          onClick={() => dispatch(setLoggedIn(true))}
        >
          LogIn
        </button>
      </div>
      <div className="w-full grid grid-flow-col justify-between xl:px-[5rem] px-[2.5rem] ">
        <div className="py-4 flex items-center ">
          <Menu
            className={`h-5 w-5 ${theme ? "text-white" : "text-black"}`}
            onClick={() => {
              dispatch(
                setProfileAndNavigationVisibilityToggle(
                  !profileAndNavigationVisibilityToggle
                )
              );
            }}
          />
          <h1 className="ml-2 text-xl font-semibold text-green-600 ">Todo</h1>
        </div>
        <div className="py-4 pr-[2.5vw]  flex justify-between items-center">
          <button
            className="hover:cursor-pointer hover:text-red-500 dark:text-white"
            onClick={() => dispatch(setLoggedIn(false))}
          >
            Log Out
          </button>
          <div className="flex items-center">
            <button className="px-2 hover:cursor-pointer"></button>
            <ToggleListSize />
            <ThemeToggler />
          </div>
        </div>
      </div>
      <div
        className={`grid bg-inherit w-[95vw] xl:justify-center
      ${
        profileAndNavigationVisibilityToggle
          ? "xl:grid-cols-[300px_70rem] grid-cols-[200px_auto]"
          : "grid-cols-[95vw] "
      } 
      lg:gap-0 gap-[.25rem] xl:gap-[1rem]`}
      >
        {/* Left Sidebar */}
        {profileAndNavigationVisibilityToggle && <LeftSidebar />}
        {/* Main Content */}
        <AllTodos />
      </div>
    </div>
  );
}
