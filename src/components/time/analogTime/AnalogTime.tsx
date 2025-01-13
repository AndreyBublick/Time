import React, {FC, memo} from 'react';
import AnalogueClock from 'react-analogue-clock';


export const AnalogTime:FC<{}> = memo(() => {
    const clockOptions = {
        baseColor: '#ffffff',
        borderColor: '#000000',
        borderWidth: 5,
        centerColor: '#000000',
        handColors: {
            hour: '#000000',
            minute: '#000000',
            second: '#000000',
        },
        notchColor: '#000000',
        numbersColor: '#000000',
        showNumbers: true,
        size: 300
    }



    return<AnalogueClock {...clockOptions} />
});



