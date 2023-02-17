import { BrowserRouter } from "react-router-dom"
import { render } from "react-dom";
import App from "./app/App";
import "./index.scss";

render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.querySelector("#root")
)