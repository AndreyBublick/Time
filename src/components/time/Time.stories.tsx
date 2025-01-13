import {Time, timeMode} from "./Time";



export default {
    component: Time,
    title: 'TaskTime',

};

export const TimeAnalog = ()=>{
    return <Time mode={timeMode.analog} />
};
export const TimeDigital = ()=>{
    return <Time mode={timeMode.digital} />
};

