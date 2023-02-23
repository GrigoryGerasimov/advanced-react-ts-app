import { lazy } from "react";

export const CounterPageLazy = lazy(async() => await import("./Counter"));
