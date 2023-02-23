import { getClassNames } from "../getClassNames";

describe("Testing getClassNames function which should:", () => {
    test("__init__", () => {
        expect(false).toBe(false);
        expect(42).toBe(42);
        expect(["a", "b", "c"]).toEqual(["a", "b", "c"]);
        expect(null).toBeNull();
        expect(undefined).not.toBeNull();
    });

    test("not be undefined", () => {
        expect(getClassNames).not.toBeUndefined();
        expect(getClassNames).toBeTruthy();
        expect(getClassNames).not.toBeFalsy();
    });

    test("return a spaced line of css classes, type string", () => {
        expect(getClassNames("mainClass", {}, ["additionalClass"])).toEqual("mainClass  additionalClass");
        expect(getClassNames("mainClass", { hovered: true }, ["additionalClass"])).toEqual("mainClass hovered additionalClass");
    });

    test("return only main class in case no other classes provided", () => {
        expect(getClassNames("mainClass", {}, [])).toEqual("mainClass ");
        expect(getClassNames("mainClass", { hovered: false, selected: false }, [])).toEqual("mainClass ");
    });

    test("return only main class and additional class(es) in case no valid conditional classes provided", () => {
        expect(getClassNames("mainClass", {}, ["additionalClass", "addClass1", "addClass2"])).toEqual("mainClass  additionalClass addClass1 addClass2");
        expect(getClassNames("mainClass", { focused: false }, ["additionalClass"])).toEqual("mainClass  additionalClass");
        expect(getClassNames("mainClass", { selected: true, active: false }, ["additionalClass"])).not.toEqual("mainClass  additionalClass");
    });

    test("return all active conditional classes", () => {
        expect(getClassNames("mainClass", { checked: true, visited: true, active: true }, [])).toEqual("mainClass checked visited active");
    });

    test("return any active conditional class(es)", () => {
        expect(getClassNames("mainClass", { selected: true, valid: false, primary: true }, ["class42"])).toEqual("mainClass selected primary class42");
    });
});
