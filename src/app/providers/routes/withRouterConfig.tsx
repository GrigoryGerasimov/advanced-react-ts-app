import type { IAppProps } from "app/interfaces/IAppProps";
import { routerConfig } from "shared/config";
import type { FC } from "react";

export const withRouterConfig = (Component: React.ComponentType | FC<IAppProps>) => (props: any) => {
    return (
        <Component {...props} config={routerConfig}/>
    );
};
