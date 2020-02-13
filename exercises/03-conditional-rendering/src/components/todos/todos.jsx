import React, { useState } from "react";


function todos(props){

return (
    
    props.todo.map((todo,index)=>{  

        if(props.showCompleted && todo.completed){
            return(
                <div>
                 {todo.title}
                </div>
            )
        } 
        
        if(!props.showCompleted && !todo.completed){
            return(
                <div>
                 {todo.title}
                </div>
            )
        } 
       
    })
)
}

export default todos;