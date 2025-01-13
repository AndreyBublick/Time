import React, {FC, memo} from 'react';
import styled from "styled-components";

type PropsType = {


    time:Date,

   /* setTime:(time:Date)=>void,*/

};




export const ControllTime:FC<PropsType> = memo(({time}) => {


    return <TimeStyled>
        {time.toLocaleTimeString()}
    </TimeStyled>
});

const TimeStyled = styled.time`
    color: rgb(151, 151, 151);
    font-size: 200px;
    font-weight: 700;
`;