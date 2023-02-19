import { extractClassNameFromEntries } from "./lib/extractClassNameFromEntries";
import { TClassNames } from "./types/TClassNames";

export const getClassNames = (mainClass: string, conditionalClasses: TClassNames, additionalClasses: string[]) => {
    return [mainClass, extractClassNameFromEntries(conditionalClasses), ...additionalClasses].join(" ");
};