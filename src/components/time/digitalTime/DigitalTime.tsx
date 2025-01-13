import React, {FC, memo} from 'react';
import styled from "styled-components";

type Props = {
    dateTime: Date,
};

export const DigitalTime:FC<Props> = memo(({dateTime}) => {
    return <TimeStyled>
        {dateTime.toLocaleTimeString()}
    </TimeStyled>
});
const TimeStyled = styled.time`
    color: rgb(151, 151, 151);
    font-size: 200px;
    font-weight: 700;
`;
