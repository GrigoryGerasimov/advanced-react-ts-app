import { lazy } from "react";

export const AboutPageLazy = lazy(async(): Promise<any> => await new Promise(resolve => {
    setTimeout(() => {
        resolve(import("./AboutPage"));
    }, 10000);
}));
