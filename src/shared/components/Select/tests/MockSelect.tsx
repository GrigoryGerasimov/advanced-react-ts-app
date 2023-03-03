import { type FC, useState } from "react";
import { Select } from "../ui/Select";

export const MockSelect: FC = (): JSX.Element | null => {
    const [value, setValue] = useState<string>();

    const handleChangeValue = (value: string): void => {
        setValue(value);
    };

    return (
        <Select
            options={[
                { lang: "lang1", title: "title1" },
                { lang: "lang2", title: "title2" },
                { lang: "lang3", title: "title3" }
            ]}
            value={value}
            onChange={handleChangeValue}
        />
    );
};
