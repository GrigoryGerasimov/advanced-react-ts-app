import { extractClassNameFromEntries } from "../extractClassNameFromEntries";

describe("Testing extractClassNameFromEntries function which should:", () => {
    test("__init__", () => {
        expect(42).toBe(42);
        expect({}).toEqual({});
        expect("test").not.toBe("estt");
    });

    test("not be undefined", () => {
        expect(extractClassNameFromEntries).not.toBeFalsy();
        expect(extractClassNameFromEntries).not.toBeNull();
        expect(extractClassNameFromEntries).toBeDefined();
    });

    test("parse the incoming object and return an array of truthy classNames as strings", () => {
        expect(extractClassNameFromEntries({ selected: true, hovered: false })).toEqual(["selected"]);
        expect(extractClassNameFromEntries({ active: false, checked: true, valid: true })).toEqual(["checked", "valid"]);
        expect(extractClassNameFromEntries({ parsed: true, invalid: false, class42: false })).not.toEqual(["parsed", "class42"]);
    });

    test("parse the incoming object and return an empty array if all classNames are falsy", () => {
        expect(extractClassNameFromEntries({ selected: false, checked: false })).toEqual([]);
        expect(extractClassNameFromEntries({ class42: true, secondary: false, primary: false })).not.toEqual([]);
    });
});
