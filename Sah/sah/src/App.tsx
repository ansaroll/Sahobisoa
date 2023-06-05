import { BrowserRouter, useLocation } from "react-router-dom";
import "./index.css";
import { Theme } from "./config/Theme";
import { DefaultTheme } from "./config/DefaultTheme";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Routes } from "./Routes";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { SurveyProvider, ThemeDarkLightProvider } from "./utils/context";
import { Provider as ReduxProvider } from "react-redux"
import { store } from "./app/store"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

//theme
import "primereact/resources/themes/vela-blue/theme.css";
//core
import "primereact/resources/primereact.min.css";
//icons
import "primeicons/primeicons.css";
import { AllRoutes } from "./pages/Routes";
import useLogin from "./utils/hooks/useLogin";
import { useEffect, useMemo } from "react";

const queryClient = new QueryClient();
export const App = () => {

  return (
    <>
      <ReduxProvider
        store={store}
      >
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <ThemeDarkLightProvider>
              <SurveyProvider>
                <ThemeProvider theme={createTheme({ ...DefaultTheme, ...Theme })}>
                  <Shell />
                  <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                  />
                </ThemeProvider>
              </SurveyProvider>
            </ThemeDarkLightProvider>
          </QueryClientProvider>
        </BrowserRouter>
      </ReduxProvider>
    </>
  );
};

const loggedRoutes = [
  "/myprofil",
  "/logout",
  "/survey/1",
]

const Shell = () => {

  const location = useLocation()

  const currentPath = useMemo(() => location.pathname, [location])
  const { isLogged , currentUser } = useLogin();

  console.log("currentUser", currentUser);
  
  useEffect(() => {
    console.log("currentPath", currentPath);
    if (!isLogged() && loggedRoutes.includes(currentPath) && currentPath !== "/login") {
      window.location.href = "/login"
    }
  }, [currentPath, isLogged, loggedRoutes, window.location])

  if (!isLogged() && loggedRoutes.includes(currentPath)) {
    return <></>
  }
  return (
    <>
      <Routes routes={AllRoutes} />
    </>
  )
}