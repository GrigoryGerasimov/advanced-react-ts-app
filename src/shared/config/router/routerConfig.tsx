import { AboutPage, MainPage, CounterPage, NotFoundPage } from "pages";
import { type IRoutes } from "./interfaces/IRoutes";
import { ERoutes } from "./types/ERoutes";

export const routerConfig: IRoutes[] = [
    {
        path: ERoutes.ABOUT,
        linkKey: "navlink-about-page",
        element: <AboutPage/>
    },
    {
        path: ERoutes.COUNTER,
        linkKey: "navlink-counter-page",
        element: <CounterPage/>
    },
    {
        path: ERoutes.MAIN,
        linkKey: "navlink-main-page",
        element: <MainPage/>
    },
    {
        path: ERoutes.NOT_FOUND,
        element: <NotFoundPage/>
    }
];
