import classes from "./styles/styles.app/App.module.scss";
import { type IAppProps } from "./interfaces/IAppProps";
import { withSuspense } from "shared/providers";
import { RoutesProvider } from "./providers";
import { getClassNames } from "shared/lib";
import { Navbar, Sidebar } from "widgets";
import { type FC } from "react";

const SuspendedRoutesProvider = withSuspense(RoutesProvider);

const App: FC<IAppProps> = ({ config, theme, themeSwitchHandler }): JSX.Element | null => {
    return (
        <div className={getClassNames(classes.app, {}, [theme])}>
            <Navbar theme={theme} config={config}/>
            <section className={getClassNames(classes["app__central-section"])}>
                <Sidebar theme={theme} onClick={themeSwitchHandler}/>
                <main className={getClassNames(classes["app__page-wrapper"])}>
                    <SuspendedRoutesProvider routes={config}/>
                </main>
            </section>
        </div>
    );
};

export default App;
