import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Theme } from "./config/Theme";
import { DefaultTheme } from "./config/DefaultTheme";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Routes } from "./Routes";
import { AllRoutes } from "./pages/Routes";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { SurveyProvider, ThemeDarkLightProvider } from "./utils/context";

const queryClient = new QueryClient();
export const App = () => {
  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <ThemeDarkLightProvider>
            <SurveyProvider>
              <ThemeProvider theme={createTheme({ ...DefaultTheme, ...Theme })}>
                <Routes routes={AllRoutes} />
              </ThemeProvider>
            </SurveyProvider>
          </ThemeDarkLightProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </>
  );
};
