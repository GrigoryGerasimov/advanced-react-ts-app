import { TClassNames } from "./TClassNames";

export const extractClassNameFromEntries = (classes: TClassNames): string[] => {
    return Object.entries(classes)
        .filter(([className, classValue]) => !!classValue)
        .map(([className, classValue]) => className);
};