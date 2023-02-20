import { IAppRoutes } from "../providers/routes/lib/interfaces/IAppRoutes";

export interface IRouterProps {
    config?: IAppRoutes[];
    theme?: string;
    themeSwitchHandler?: () => void;
}