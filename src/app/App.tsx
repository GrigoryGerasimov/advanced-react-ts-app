import { AboutPageLazy, MainPageLazy, CounterPageLazy } from "./pages";
import { getClassNames } from "../helpers/classNames/getClassNames";
import { Header } from "./components/Header/Header";
import { Button } from "./components/Button/Button";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import classes from "../styles/App.module.scss"
import { useTheme } from "./hooks/useTheme";
import { Suspense } from "react";

const App = () => {
    const { theme, themeSwitchHandler } = useTheme();

    return (
        <div className={getClassNames(classes.app, {}, [theme])}>
            <Button onClick={themeSwitchHandler} title={theme}/>
            <Header/>
            <Suspense fallback={<Loader/>}>
                <Routes>
                    <Route path="/about" element={<AboutPageLazy/>}/>
                    <Route path="/counter" element={<CounterPageLazy/>}/>
                    <Route path="/" element={<MainPageLazy/>}/>
                </Routes>
            </Suspense>
        </div>
    )
};

export default App;