import { ThemeProvider } from "app/providers/themes";
import { BrowserRouter } from "react-router-dom";
import "app/styles/styles.global/index.scss";
import { render } from "react-dom";
import App from "app/App";

render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>,
    document.querySelector("#root")
)