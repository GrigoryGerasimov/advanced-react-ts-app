import { createContext, useContext } from "react";
import { ITheme } from "./interfaces/ITheme";

export const ThemeContext = createContext<ITheme>({});

export const useTheme = () => useContext(ThemeContext);

