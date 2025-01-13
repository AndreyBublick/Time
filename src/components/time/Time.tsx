import React, {FC, memo, useCallback} from 'react';
import {useInterval} from "../../hooks/useInterval";
import {DigitalTime} from "./digitalTime/DigitalTime";
import {AnalogTime} from "./analogTime/AnalogTime";

type Props = {
    mode: timeMode;
};
export enum timeMode {
 analog = "analog",
 digital = "digital",
}

export const Time:FC<Props> = memo(({mode}) => {

    const [time, setTime] = React.useState(new Date);

    const setTimeHandler = useCallback(() => {
        setTime(new Date());
    }, []);

    useInterval(setTimeHandler, 1000);


    return mode===timeMode.digital ? <DigitalTime dateTime={time} /> : timeMode.digital && <AnalogTime />;
});

