declare module "*.scss" {
  type IClassNames = Record<string, string>;
  const classNames: IClassNames;
  export = classNames;
}

declare module "*.png";
declare module "*.gif";
declare module "*.jpeg";
declare module "*.jpg";
declare module "*.svg" {
    import type React from "react";
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export = SVG;
}

declare const __IS_DEV_MODE__: boolean;
