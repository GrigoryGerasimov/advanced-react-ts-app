import { ThemeProvider } from "./app/hooks/useTheme";
import { BrowserRouter } from "react-router-dom";
import { render } from "react-dom";
import "./styles/index.scss";
import App from "./app/App";

render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>,
    document.querySelector("#root")
)