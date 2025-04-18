# TodoWeatherAuth

A beautifully designed **Todo App** integrated with **OpenWeather API** that helps users manage tasks while keeping an eye on the weather—especially useful for outdoor activities. The app also includes a fake login/logout system using **Redux Toolkit (RTK)** and supports light/dark themes.

Live Demo: [todo-weather-auth.vercel.app](https://todo-weather-auth.vercel.app)

GitHub Repo: [TodoWeatherAuth](https://github.com/SachinSinghPatwal/TodoWeatherAuth.git)

---

## 🚀 Features

- ✅ Add and remove todos
- 🌗 Toggle between dark/light theme
- ☁️ View weather details for each outdoor todo
- 🔐 Fake login/logout using RTK

---

## 🛠 Tech Stack

- React
- TailwindCSS
- HTML
- Redux Toolkit
- OpenWeather API
- Vite

---

## 📁 Folder Structure

```
Todo_weather/
├── public/
├── src/
│   ├── Components/
│   │   ├── Svg's/
│   │   ├── ThemeToggler.jsx
│   │   ├── ToggleListSize.jsx
│   │   ├── AddTodos.jsx
│   │   ├── AllTodos.jsx
│   │   ├── LeftSidebar.jsx
│   │   └── RightSidebar.jsx
│   ├── Store/
│   │   ├── Slice.js
│   │   └── Store.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

---

## 🧪 How to Use

1. **Visit** the app: [todo-weather-auth.vercel.app](https://todo-weather-auth.vercel.app)
2. Click on **Login** (mock auth system using RTK)
3. Click on **Add Task** to create a new todo
4. Choose a category (indoor/outdoor/etc.)
5. Click on each todo to see detailed weather info powered by OpenWeather API
6. Toggle between light/dark mode using the top-right theme switch

---

## 🔧 Getting Started Locally

1. Clone the repository:
```bash
git clone https://github.com/SachinSinghPatwal/TodoWeatherAuth.git
```

2. Navigate to the project directory:
```bash
cd TodoWeatherAuth
```

3. Install dependencies:
```bash
npm install
```

4. Create a `.env` file in the root and add your OpenWeather API key:
```env
VITE_WEATHER_API_KEY=your_openweather_api_key_here
```

5. Start the development server:
```bash
npm run dev
```

---

## 🐞 Known Issues

- ⚠️ Minor bug exists when updating an existing todo. Fix is in progress.

---

## 📄 License

This project currently does **not** use any open-source license.

---

## 🙏 Acknowledgements

- OpenWeather API for weather data
- Redux Toolkit for simplified state management
- Vite for lightning-fast build and development

---

Made with ❤️ by [Sachin Singh Patwal](https://github.com/SachinSinghPatwal)


