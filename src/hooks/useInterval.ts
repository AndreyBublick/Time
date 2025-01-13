import {useEffect} from "react";



export const useInterval = (callBack:()=>void, seconds:number):void => {

    useEffect(() => {
        const timer = setInterval(callBack, seconds);
        return () => clearInterval(timer);

    }, [callBack,seconds]);

};