import { extractClassNameFromEntries } from "./lib/extractClassNameFromEntries";
import { type TClassNames } from "./types/TClassNames";

export const getClassNames = (
    mainClass: string,
    conditionalClasses?: TClassNames,
    additionalClasses: string[] = []
): string => {
    const extractedClasses = (conditionalClasses != null) ? extractClassNameFromEntries(conditionalClasses) : "";

    return [mainClass, extractedClasses, ...additionalClasses].toString().replace(/,/g, " ");
};
