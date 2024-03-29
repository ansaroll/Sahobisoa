import { ThemeOptions } from "@mui/material";

export const Theme:ThemeOptions ={
    palette: {
        primary: {
            // main:"#F97316",
            main:"#0F172A",
            light: "#7477FF"
        },

        secondary:{
            main: "#1E293B",
            light:"#FFFFFF"
        }
    },
    typography: {
        fontFamily: [
            "Lexend Deca",
            // "Inter",
            "Circe",
            "Roboto",
            "Helvetica Neue",
            "Arial",
            "sans-serif"
        ].join(","),
        h1: {
        },
        h2: { 
        },
        h3: {
        },
        h4: {
        },
        h5: {
        },
        h6: {
        },
        subtitle1: {
        },
        subtitle2: {
        },
        body1: {
        },
        body2: {
        },
    },
    components: {
        MuiFormControl: {            
            styleOverrides: {
                root: {
                    "& .MuiFormLabel-root.MuiInputLabel-shrink": {
                        zIndex: 10,
                        fontWeight: 700,
                        textShadow: "0px 0px 10px #ffffff"
                    }
                }
            }
        }
    }
}