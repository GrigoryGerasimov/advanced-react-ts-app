export interface ISelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: Array<Record<string, string>>
    classNames?: string[]
    onChange: (param: any) => void
};
