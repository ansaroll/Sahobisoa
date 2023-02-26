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
    answers: {} as any,
    saveAnswers: (newsAnswers:any) => {},
});

export const SurveyProvider = ({ children }:Props) => {
  const [answers, setAnswers] = useState<any>({1:false,2:false,3:false,4:false,5:false,6:false});
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
