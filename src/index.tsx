import { withRouterConfig, ThemeProvider } from "app/providers";
import { ErrorBoundariesProvider } from "app/providers/errors";
import { withSuspense, withThemes } from "shared/providers";
import { BrowserRouter } from "react-router-dom";
import "app/styles/styles.global/index.scss";
import { render } from "react-dom";
import "shared/config/i18n/i18n";
import App from "app/App";

const SuspendedAppWithProps = withSuspense(withThemes(withRouterConfig(App)));
const SuspendedErrorBoundariesProvider = withSuspense(ErrorBoundariesProvider);

render(
    <BrowserRouter>
        <SuspendedErrorBoundariesProvider>
            <ThemeProvider>
                <SuspendedAppWithProps/>
            </ThemeProvider>
        </SuspendedErrorBoundariesProvider>
    </BrowserRouter>,
    document.querySelector("#root")
);
