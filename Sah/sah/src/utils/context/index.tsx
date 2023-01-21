import { createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeDarkLightProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const SurveyContext = createContext({
    answers: {},
    saveAnswers: (newsAnswers:any) => {},
});

export const SurveyProvider = ({ children }:Props) => {
  const [answers, setAnswers] = useState({1:true,2:true,3:true,4:true,5:true,6:true});
  const saveAnswers = (newAnswers:any) => {
    setAnswers({ ...answers, ...newAnswers });
  };

  return (
    <SurveyContext.Provider value={{ answers, saveAnswers }}>
      {children}
    </SurveyContext.Provider>
  );
};

type Props = {
  children: React.ReactNode;
};
