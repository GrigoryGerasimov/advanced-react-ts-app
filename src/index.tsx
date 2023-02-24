import { BrowserRouter } from "react-router-dom";
import { withRouterConfig, ThemeProvider } from "app/providers";
import { withSuspense, withThemes } from "shared/providers";
import "app/styles/styles.global/index.scss";
import { render } from "react-dom";
import "shared/config/i18n/i18n";
import App from "app/App";

const SuspendedAppWithProps = withSuspense(withThemes(withRouterConfig(App)));

render(
    <BrowserRouter>
        <ThemeProvider>
            <SuspendedAppWithProps/>
        </ThemeProvider>
    </BrowserRouter>,
    document.querySelector("#root")
);
