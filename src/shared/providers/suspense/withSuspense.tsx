import { Loader } from "shared/components";
import { Suspense } from "react";

export const withSuspense = (Component: React.ComponentType) => (props: any) => {
    return (
        <Suspense fallback={<Loader/>}>
            <Component {...props}/>
        </Suspense>
    )
};