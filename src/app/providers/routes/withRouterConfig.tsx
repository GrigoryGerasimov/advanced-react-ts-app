import { routerConfig } from "shared/config";

export const withRouterConfig = (Component: React.ComponentType) => (props: any) => {
    return (
        <Component {...props} config={routerConfig}/>
    )
};