import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import "./index.css";
import Home from "./pages/Home";
import { Survey } from "./pages/Survey";
import { Results } from "./pages/Results";
import { Freelances } from "./pages/Freelances";

import reportWebVitals from "./reportWebVitals";
import { Theme } from "./config/Theme";
import { DefaultTheme } from "./config/DefaultTheme";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Routes } from "./Routes";
import { MainLayout } from "./components/MainLayout";
import Typography from '@mui/material/Typography';
import Error404 from "./components/Error404";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const AllRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/survey/:id",
        element: <Survey />,
      },
      {
        path: "/result",
        element: <Results />,
      },
      {
        path: "/freelances",
        element: <Freelances />,
      },
    ],
  },
  {
    path:"*",
    element:<Error404/>
  }
];
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={createTheme({ ...DefaultTheme, ...Theme })}>
        <Routes routes={AllRoutes} />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
