/** @jest-environment jsdom */

import { InitComponent } from "shared/config/tests/Component.init";
import { render, screen, fireEvent } from "@testing-library/react";
import { MockSelect } from "./MockSelect";

describe("Testing Select component which should:", () => {
    test("__init__", () => {
        render(<InitComponent/>);
        expect(screen.getByTestId("init")).toBeInTheDocument();
    });

    test("be defined", () => {
        render(<MockSelect/>);
        expect(screen.getByRole("combobox")).toBeInTheDocument();
        screen.debug();
    });

    test("have correct options mapping", () => {
        render(<MockSelect/>);
        screen.debug();
        expect(screen.getByDisplayValue(/^title1$/)).toHaveValue("lang1");
        fireEvent.change(screen.getByTestId("select"), { target: { value: "lang2" } });
        expect(screen.getByDisplayValue(/^title2$/)).toHaveValue("lang2");
        fireEvent.change(screen.getByTestId("select"), { target: { value: "lang3" } });
        expect(screen.getByDisplayValue(/^title3$/)).toHaveValue("lang3");
    });
});
