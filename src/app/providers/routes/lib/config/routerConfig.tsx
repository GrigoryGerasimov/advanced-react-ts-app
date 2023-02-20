import { AboutPage, MainPage, CounterPage } from "pages";
import { IAppRoutes } from "../interfaces/IAppRoutes";
import { EAppRoutes } from "../types/EAppRoutes";

export const routerConfig: IAppRoutes[] = [
    {
        path: EAppRoutes.ABOUT,
        linkTitle: "About Page",
        element: <AboutPage/>
    },
    {
        path: EAppRoutes.COUNTER,
        linkTitle: "Counter",
        element: <CounterPage/>
    },
    {
        path: EAppRoutes.MAIN,
        linkTitle: "Main Page",
        element: <MainPage/>
    }
];