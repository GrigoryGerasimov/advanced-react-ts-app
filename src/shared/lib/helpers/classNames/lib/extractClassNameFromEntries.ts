import { type TClassNames } from "../types/TClassNames";

export const extractClassNameFromEntries = (classes: TClassNames): string[] => {
    return Object.entries(classes)
        .filter(([className, classValue]) => Boolean(classValue))
        .map(([className, classValue]) => className);
};
