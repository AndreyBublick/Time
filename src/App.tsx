import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import styled from "styled-components";

function App() {

    const [time, setTime] = React.useState(new Date());

    /*useEffect(() => {
      setTime(new Date());
    }, [time]);*/

     useEffect(() => {
         const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);

    }, [time]);

    return<Wrapper>
        <TimeStyled >
            {time.toLocaleTimeString()}
        </TimeStyled>
    </Wrapper>
}

export default App;


const TimeStyled = styled.time`
    color: rgb(151, 151, 151);
    font-size: 200px;
    font-weight: 700;
`;
const Wrapper = styled.div`
background-color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;