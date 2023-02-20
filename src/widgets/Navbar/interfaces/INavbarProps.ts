import { IAppRoutes } from "app/providers";

export interface INavbarProps {
    theme: string;
    config: IAppRoutes[];
    onClick: () => void
}