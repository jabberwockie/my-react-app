import React from "react";

const person = (props) => {
    return (
        <div>
           
        <p>I'm {props.name} and I am {props.age} years old</p>
        <p>{props.children}</p>
        
        </div>

    )
}

// const myAge = () => {
//    const age = Math.floor(Math.random()*30);
//    return age === 0 ? age + 1 : age;
// } 

export default person;
