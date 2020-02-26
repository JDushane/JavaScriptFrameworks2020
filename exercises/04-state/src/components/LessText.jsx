import React, { useState } from "react";

function LessText(props){
    const [hidden, setHidden] = useState(false);
        return(
            <>
            <p>{!hidden ? props.text.substr(0, props.maxLength).trim() : props.text}</p>
            <button onClick={() => setHidden(true)}>Read More</button>
            <button onClick={() => setHidden(false)}>Read Less</button>
            </>
        )
}

export default LessText;

