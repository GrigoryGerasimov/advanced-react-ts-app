import { createContext, useContext } from "react";
import { type ITheme } from "./interfaces/ITheme";

export const ThemeContext = createContext<ITheme>({});

export const useTheme = (): ITheme => useContext(ThemeContext);
