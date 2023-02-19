import { AboutPage, MainPage, CounterPage } from "pages";
import { IAppRoutes } from "./lib/interfaces/IAppRoutes";
import { EAppRoutes } from "./lib/types/EAppRoutes";

export const appRouterConfig: IAppRoutes[] = [
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