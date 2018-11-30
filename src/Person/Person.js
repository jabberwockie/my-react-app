import React from "react";
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">     
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input  type="text" onChange={props.changed} defaultValue={props.name}/>
        </div>
    )
}

// const myAge = () => {
//    const age = Math.floor(Math.random()*30);
//    return age === 0 ? age + 1 : age;
// } 

export default person;
