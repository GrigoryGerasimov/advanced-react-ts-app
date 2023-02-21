import { IRoutes } from "shared/config";

export interface IRouterProps {
    config?: IRoutes[];
    theme?: string;
    themeSwitchHandler?: () => void;
}