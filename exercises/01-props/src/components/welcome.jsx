import React from "react";

function welcome(prop){
    if(prop.name === undefined){
        return(
            <h1>Hello, user</h1>
        )
    }
    else    
        return(
            <h1>Hello, {prop.name}</h1>
        )
}

export default welcome;