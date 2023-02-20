import { NavLinkProps } from "react-router-dom";

export interface ILinkProps extends NavLinkProps {
    classNames?: string[],
    theme?: string
}