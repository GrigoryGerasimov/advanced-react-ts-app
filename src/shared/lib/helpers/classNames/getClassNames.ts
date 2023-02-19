import { extractClassNameFromEntries } from "./lib/extractClassNameFromEntries";
import { TClassNames } from "./types/TClassNames";

export const getClassNames = (
        mainClass: string,
        conditionalClasses?: TClassNames,
        additionalClasses: string[] = []
    ) => {
    const extractedClasses = conditionalClasses ? extractClassNameFromEntries(conditionalClasses) : "";

    return [mainClass, extractedClasses, ...additionalClasses].join(" ");
};