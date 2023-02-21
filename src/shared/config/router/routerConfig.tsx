import { AboutPage, MainPage, CounterPage } from "pages";
import { IRoutes } from "./interfaces/IRoutes";
import { ERoutes } from "./types/ERoutes";

export const routerConfig: IRoutes[] = [
    {
        path: ERoutes.ABOUT,
        linkTitle: "About Page",
        element: <AboutPage/>
    },
    {
        path: ERoutes.COUNTER,
        linkTitle: "Counter",
        element: <CounterPage/>
    },
    {
        path: ERoutes.MAIN,
        linkTitle: "Main Page",
        element: <MainPage/>
    }
];