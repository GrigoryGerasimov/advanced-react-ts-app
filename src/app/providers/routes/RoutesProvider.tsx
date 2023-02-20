import { IRouterProps } from "./lib/interfaces/IRouterProps";
import { Routes, Route } from "react-router-dom";
import { Loader } from "shared/components";
import { FC, Suspense } from "react";

export const RoutesProvider: FC<IRouterProps> = ({ routes }) => {
    return (
        <Suspense fallback={<Loader/>}>
            <Routes>
                {routes.map(({ path, element }) => (
                    <Route key={path} path={path} element={element}/>
                ))}
            </Routes>
        </Suspense>
    )
};