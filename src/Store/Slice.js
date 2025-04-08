import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: false,
  tasks: [
    {
      id: new Date(2025, 2, 11, 8, 45).toISOString(),
      text: "Prepare presentation",
      completed: true,
      inDoor: true,
    },
    {
      id: new Date(2025, 2, 11, 11, 20).toISOString(),
      text: "Update blog",
      completed: true,
      indoor: false,
    },
    {
      id: new Date(2025, 3, 8, 11, 20).toISOString(),
      text: "Completed Assignment",
      completed: true,
      indoor: false,
    },
  ],
  detailedInfoVisibility: false,
  profileAndNavigationVisibilityToggle: true,
  tasksShowingType: "All Task",
  gridTaskList: false,
  aboutWeather: "",
  loggedIn: false,
};

const slice = createSlice({
  name: "SingleSourceOfTruthSlice",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setTasks: (state, action) => {
      state.tasks.unshift(action.payload);
    },
    setDetailedInfoVisibility: (state, action) => {
      state.detailedInfoVisibility = action.payload;
    },
    removeTasks: (state, action) => {
      state.tasks = state.tasks.filter((each) => each.id !== action.payload);
    },
    updateCompletedTasks: (state, action) => {
      const { id, status } = action.payload;
      state.tasks = state.tasks.map((task) =>
        task.id === id ? { ...task, completed: status } : task
      );
    },
    updateTasks: (state, action) => {
      const { id, content } = action.payload;
      state.tasks = state.tasks.map((task) =>
        task.id === id ? { ...task, text: content } : task
      );
    },
    updateInDoorTasks: (state, action) => {
      const { id, status } = action.payload;
      state.tasks = state.tasks.map((task) =>
        task.id === id ? { ...task, inDoor: status } : task
      );
    },
    setTasksShowingType: (state, action) => {
      state.tasksShowingType = action.payload;
    },
    setProfileAndNavigationVisibilityToggle: (state, action) => {
      state.profileAndNavigationVisibilityToggle = action.payload;
    },
    setGridTaskList: (state, action) => {
      state.gridTaskList = action.payload;
    },
    setAboutWeather: (state, action) => {
      state.aboutWeather = action.payload;
    },
    setLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
  },
});

export default slice.reducer;

export const {
  setTheme,
  setTasks,
  setDetailedInfoVisibility,
  removeTasks,
  updateCompletedTasks,
  updateInDoorTasks,
  setTasksShowingType,
  setProfileAndNavigationVisibilityToggle,
  setGridTaskList,
  setAboutWeather,
  updateTasks,
  setLoggedIn,
} = slice.actions;
