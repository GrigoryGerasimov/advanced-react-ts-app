/** @jest-environment jsdom */

import { InitComponent } from "shared/config/tests/Component.init";
import { render, screen } from "@testing-library/react";
import { MockLink } from "./MockLink";
import React from "react";

describe("Testing the Link component which should:", () => {
    test("__init__", () => {
        render(<InitComponent/>);
        expect(screen.getByTestId("init")).toBeInTheDocument();
    });

    test("be defined", () => {
        render(<MockLink/>);
        expect(screen.getByRole("link")).toBeInTheDocument();
    });

    test("expose main class", () => {
        render(<MockLink/>);
        expect(screen.getByRole("link")).toHaveClass("applink");
    });

    test("expose primary class in case of dark theme", () => {
        render(<MockLink theme="dark"/>);
        expect(screen.getByRole("link")).toHaveClass("primary");
    });

    test("expose secondary class by default", () => {
        render(<MockLink/>);
        expect(screen.getByRole("link")).toHaveClass("secondary");
    });

    test("expose secondary class in case of light theme", () => {
        render(<MockLink theme="light"/>);
        expect(screen.getByRole("link")).toHaveClass("secondary");
    });
});
