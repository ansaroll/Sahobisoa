
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Theme } from "./config/Theme";
import { DefaultTheme } from "./config/DefaultTheme";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Routes } from "./Routes";
import { AllRoutes } from "./pages/Routes";


export const App = () => {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={createTheme({ ...DefaultTheme, ...Theme })}>
          <Routes routes={AllRoutes} />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
};
