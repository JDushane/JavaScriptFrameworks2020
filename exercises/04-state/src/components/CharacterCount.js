import React, { useState } from "react";

function CharacterCount(){
    const [count, setCount] = useState(0);
    const[string, setString] = useState("");
    return(
        <>
        <p>Records the wordcount of what you type</p>
        <textarea 
            onChange={e => setCount(e.target.value.length) & setString(e.target.value)}
        ></textarea>
        <p>Characters:  {count}</p>
        <p>Backwards: {string.split("").reverse().join("")}</p>
        </>
    )
}

export default CharacterCount;