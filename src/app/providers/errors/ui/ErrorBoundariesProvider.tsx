import { type IErrorBoundariesState } from "../interfaces/IErrorBoundariesState";
import { type EErrorBoundariesProps } from "../types/EErrorBoundariesProps";
import { PageErrorHandler } from "widgets";
import React from "react";

export class ErrorBoundariesProvider extends React.Component<EErrorBoundariesProps, IErrorBoundariesState> {
    constructor(props: EErrorBoundariesProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(): IErrorBoundariesState {
        return { hasError: true };
    }

    componentDidCatch(error: any, errorInfo: any): void {
        console.error(error, errorInfo);
    }

    render(): React.ReactNode {
        return this.state.hasError ? <PageErrorHandler/> : this.props.children;
    }
}
