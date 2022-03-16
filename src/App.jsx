import React, { useState, useEffect } from "react";
import Greeter from './Greeter';

const App = () => {
    const [username, setUsername] = useState(" ");
    const handleUsernameChange = e => {
        setUsername(e.target.value);
    }
    const [loaded, setloaded] = useState(true);
    const handleButtonClick = () => {
        setloaded(true);
       
    }
    useEffect(() => {
        setTimeout(() => {
            setloaded(false);
          }, 3000);

    }, [loaded])

    if (loaded === false){
        return (
        <>
        <h2>Website loading...</h2>
        <button onClick={handleButtonClick}>Click this to load.</button>
        </>
        )
    }
    return(
        <>
        <h1>This is the way</h1>
        <Greeter name="Kaleb" phrase="how are you?"/>
        <Greeter name="Jack" phrase="where are you?"/>
        <Greeter name='Meagan' phrase='see you later' />
        <input value={username}  onChange={handleUsernameChange}/>
        <p>You are logging in as: {username}</p>
        </>
    );
}


export default App;