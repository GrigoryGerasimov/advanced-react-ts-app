import { extractClassNameFromEntries } from "./extractClassNameFromEntries";
import { TClassNames } from "./TClassNames";

export const getClassNames = (mainClass: string, conditionalClasses: TClassNames, additionalClasses: string[]) => {
    return [mainClass, extractClassNameFromEntries(conditionalClasses), ...additionalClasses].join(" ");
};