import { routerConfig } from "./lib/config/routerConfig";

export const withRouterConfig = (Component: React.ComponentType) => (props: any) => {
    return (
        <Component {...props} config={routerConfig}/>
    )
};