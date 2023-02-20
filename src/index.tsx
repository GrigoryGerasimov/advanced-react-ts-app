import { withThemes } from "shared/providers/themes";
import { BrowserRouter } from "react-router-dom";
import { withRouterConfig } from "app/providers";
import { ThemeProvider } from "app/providers";
import "app/styles/styles.global/index.scss";
import { render } from "react-dom";
import App from "app/App";

const AppWithProps = withThemes(withRouterConfig(App));

render(
    <BrowserRouter>
        <ThemeProvider>
            <AppWithProps/>
        </ThemeProvider>
    </BrowserRouter>,
    document.querySelector("#root")
)