import { IRouterProps } from "./lib/interfaces/IRouterProps";
import { Routes, Route } from "react-router-dom";
import { FC} from "react";

export const RoutesProvider: FC<IRouterProps> = ({ routes }) => {
    return (
        <Routes>
            {routes.map(({ path, element }) => (
                <Route key={path} path={path} element={element}/>
            ))}
        </Routes>
    )
};