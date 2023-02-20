import { getClassNames } from "shared/lib/helpers/classNames/getClassNames";
import { appRouterConfig } from "./providers/routes/AppRouter";
import classes from "./styles/styles.app/App.module.scss";
import { useTheme } from "shared/providers/themes";
import { Loader } from "shared/components/Loader";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "widgets/Navbar";
import { Suspense } from "react";

const App = () => {
    const { theme, themeSwitchHandler } = useTheme();

    return (
        <div className={getClassNames(classes.app, {}, [theme])}>
            <Navbar theme={theme} onClick={themeSwitchHandler}/>
            <Suspense fallback={<Loader/>}>
                <Routes>
                    {appRouterConfig.map(({ path, element }) => (
                        <Route key={path} path={path} element={element}/>
                    ))}
                </Routes>
            </Suspense>
        </div>
    )
};

export default App;