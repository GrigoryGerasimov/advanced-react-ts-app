import { BrowserRouter as Router } from "react-router-dom";
import React, { type FC } from "react";
import { Link } from "../ui/Link";

export const MockLink: FC<{ theme?: string }> = ({ theme }): JSX.Element | null => {
    return (
        <Router>
            <Link to="test" theme={theme}>
                <div/>
            </Link>
        </Router>
    );
};
