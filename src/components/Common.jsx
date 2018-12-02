import { memo } from "react";

export const ToCelsius = memo(({ temp }) => {
    return temp.toFixed() + '℃';
});