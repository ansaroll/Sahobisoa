import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Theme } from "./config/Theme";
import { DefaultTheme } from "./config/DefaultTheme";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppRoutes, { Routes } from "./Routes";
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
                  <AppRoutes />
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
