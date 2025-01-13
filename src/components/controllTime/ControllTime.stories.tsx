



import {ControllTime} from "./ControllTime";
import {useCallback, useState} from "react";
import {useInterval} from "../../hooks/useInterval";



/*export const ActionsData = {
    onArchiveTask: fn(),
    onPinTask: fn(),
};*/

export default {
    component: ControllTime,
    title: 'ControllTime',
   /* tags: ['autodocs'],
    //👇 Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
    args: {
        ...ActionsData,
    },*/
};

export const ControllTimeView = ()=>{
    const [time, setTime] = useState(new Date);

    const setTimeHandler = useCallback(() => {
        setTime(new Date());
    }, []);

    useInterval(setTimeHandler, 1000);
    return <ControllTime time={time}   />
} ;

