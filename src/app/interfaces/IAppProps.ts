import { type IRoutes } from "shared/config";

export interface IAppProps {
    config: IRoutes[]
    theme: string
    themeSwitchHandler: () => void
}
