import { type IRouterProps } from "shared/config";
import { Loader } from "shared/components";
import { type FC, Suspense } from "react";

export const withSuspense = (Component: React.ComponentType | FC<IRouterProps>) => (props: any) => {
    return (
        <Suspense fallback={<Loader/>}>
            <Component {...props}/>
        </Suspense>
    );
};
