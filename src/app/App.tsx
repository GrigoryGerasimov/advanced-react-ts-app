import classes from "./styles/styles.app/App.module.scss";
import { IRouterProps } from "./interfaces/IRouterProps";
import { RoutesProvider } from "./providers";
import { getClassNames } from "shared/lib";
import { Navbar } from "widgets/Navbar";
import { FC } from "react";


const App: FC<IRouterProps> = ({ config, theme, themeSwitchHandler }) => {
    return (
        <div className={getClassNames(classes.app, {}, [theme])}>
            <Navbar theme={theme} onClick={themeSwitchHandler} config={config}/>
            <RoutesProvider routes={config}/>
        </div>
    )
};

export default App;