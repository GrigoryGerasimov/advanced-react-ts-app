import { type IRouterProps } from "shared/config";
import { PageLoadHandler } from "widgets";
import { type FC, Suspense } from "react";

export const withSuspense = (Component: React.ComponentType | FC<IRouterProps>) => (props: any) => {
    return (
        <Suspense fallback={<PageLoadHandler/>}>
            <Component {...props}/>
        </Suspense>
    );
};
