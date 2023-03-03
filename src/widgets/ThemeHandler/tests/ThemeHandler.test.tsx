import { type UserEvent } from "@testing-library/user-event/dist/types/setup/setup";
import { InitComponent } from "shared/config/tests/Component.init";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MockThemeHandler } from "./MockThemeHandler";

describe("Testing ThemeHandler widget which should:", () => {
    let uEvent: UserEvent | null;

    beforeAll(() => {
        uEvent = userEvent.setup({ delay: null });
    });

    afterAll(() => {
        uEvent = null;
    });

    test("__init__", () => {
        render(<InitComponent/>);
        expect(screen.getByTestId("init")).toBeInTheDocument();
    });

    test("be defined", () => {
        render(<MockThemeHandler/>);
        expect(screen.getByRole("button")).toBeInTheDocument();
    });

    test("correctly handle theme switching", async() => {
        render(<MockThemeHandler/>);
        expect(screen.getByTestId("dark-icon")).toBeInTheDocument();
        await uEvent!.click(screen.getByRole("button"));
        expect(screen.getByTestId("light-icon")).toBeInTheDocument();
        await uEvent!.click(screen.getByRole("button"));
        expect(screen.getByTestId("dark-icon")).toBeInTheDocument();
    });
});
