import { type ERoutes } from "../types/ERoutes";

export interface IRoutes {
    path: ERoutes
    linkKey?: string
    element: React.ReactElement
}
