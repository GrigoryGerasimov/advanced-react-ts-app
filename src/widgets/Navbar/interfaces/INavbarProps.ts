import { type IRoutes } from "shared/config";

export interface INavbarProps {
    theme: string
    config: IRoutes[]
    classNames?: string[]
    onClick?: () => void
}
