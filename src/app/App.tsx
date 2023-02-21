import classes from "./styles/styles.app/App.module.scss";
import { IRouterProps } from "./interfaces/IRouterProps";
import { RoutesProvider } from "./providers";
import { getClassNames } from "shared/lib";
import { Navbar, Sidebar } from "widgets";
import { FC } from "react";


const App: FC<IRouterProps> = ({ config, theme, themeSwitchHandler }) => {
    return (
        <div className={getClassNames(classes.app, {}, [theme])}>
            <Navbar theme={theme} config={config}/>
            <section className={getClassNames(classes["app__central-section"])}>
                <Sidebar theme={theme} onClick={themeSwitchHandler}/>
                <main className={getClassNames(classes["app__page-wrapper"])}>
                    <RoutesProvider routes={config}/>
                </main>
            </section>
        </div>
    )
};

export default App;