/** @jest-environment jsdom */

import { InitComponent } from "shared/config/tests/Component.init";
import { render, screen } from "@testing-library/react";
import { Button } from "../ui/Button";
import React from "react";

describe("Testing Button component which should:", () => {
    test("__init__", () => {
        render(<InitComponent/>);
        expect(screen.queryByTestId("init")).toBeInTheDocument();
    });

    test("be rendered", () => {
        render(<Button/>);
        expect(screen.getByRole("button")).toBeInTheDocument();
    });

    test("expose main class", () => {
        render(<Button/>);
        expect(screen.getByRole("button")).toHaveClass("btn");
    });

    test("expose conditional class clean if should be clean button", () => {
        render(<Button shouldBeClean={true}/>);
        expect(screen.getByRole("button")).toHaveClass("clean");
    });

    test("expose no conditional class if shouldn't be clean (default behaviour)", () => {
        render(<Button/>);
        expect(screen.getByRole("button")).not.toHaveClass("clean");
    });

    test("expose additional class(es) - if provided", () => {
        render(<Button classNames={["test"]}/>);
        expect(screen.getByRole("button")).toHaveClass("test");
    });

    test("expose no additional class(es) - if not provided", () => {
        render(<Button/>);
        expect(screen.getByRole("button")).not.toHaveClass("test");
    });

    test("expose all the classes provided", () => {
        render(<Button shouldBeClean={true} classNames={["testClass1", "testClass2"]}/>);
        expect(screen.getByRole("button")).toHaveClass("btn clean testClass1 testClass2", { exact: true });
        expect(screen.getByRole("button")).not.toHaveClass("btn clean", { exact: true });
    });
});
