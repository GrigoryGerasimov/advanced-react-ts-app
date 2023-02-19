import { AboutPage, MainPage, CounterPage } from "pages";
import { IAppRoutes } from "./lib/interfaces/IAppRoutes";
import { EAppRoutes } from "./lib/types/EAppRoutes";

export const appRouterConfig: IAppRoutes[] = [
    {
        path: EAppRoutes.ABOUT,
        element: <AboutPage/>
    },
    {
        path: EAppRoutes.COUNTER,
        element: <CounterPage/>
    },
    {
        path: EAppRoutes.MAIN,
        element: <MainPage/>
    }
];