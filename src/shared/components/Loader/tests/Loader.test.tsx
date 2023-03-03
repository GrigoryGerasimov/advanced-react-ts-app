/** @jest-environment jsdom */

import { InitComponent } from "shared/config/tests/Component.init";
import { render, screen } from "@testing-library/react";
import { Loader } from "../ui/Loader";

describe("Testing Loader component which should:", () => {
    test("__init__", () => {
        render(<InitComponent/>);
        expect(screen.getByTestId("init")).toBeInTheDocument();
    });

    test("be defined", () => {
        render(<Loader/>);
        expect(screen.getByTestId("loader")).toBeInTheDocument();
    });

    test("expose main class", () => {
        render(<Loader/>);
        expect(screen.getByTestId("loader")).toHaveClass("loader");
    });

    test("expose all additional class(es) - if provided", () => {
        render(<Loader classNames={["testClass1", "testClass2", "testClass3"]}/>);
        expect(screen.getByTestId("loader")).toHaveClass("testClass1 testClass2 testClass3");
        expect(screen.getByTestId("loader")).toHaveClass("loader testClass1 testClass2 testClass3", { exact: true });
        expect(screen.getByTestId("loader")).not.toHaveClass("loader testClass2", { exact: true });
    });
});
