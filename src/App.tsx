import React, {useEffect} from 'react';
import './App.css';
import styled from "styled-components";
import {Time, timeMode} from "./components/time/Time";
import {ControllTime} from "./components/controllTime/ControllTime";

function App() {

    const [time, setTime] = React.useState(new Date());


    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);

    }, [time]);


    return <Wrapper>
       <Time mode={timeMode.digital} />
       {/*<ControllTime time={time} />*/}
    </Wrapper>
}

export default App;



const Wrapper = styled.div`
    background-color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;