import { type IRouterProps } from "shared/config";
import { Routes, Route } from "react-router-dom";
import { type FC } from "react";

export const RoutesProvider: FC<IRouterProps> = ({ routes }): JSX.Element | null => {
    return (
        <Routes>
            {routes.map(({ path, element }) => (
                <Route key={path} path={path} element={element}/>
            ))}
        </Routes>
    );
};
