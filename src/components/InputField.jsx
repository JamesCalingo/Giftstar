import React from "react";

export default function InputField(props) {
    return <div>
        <label htmlFor={props.name}>{props.label}</label><br />
        <input name={props.name} type={props.type}/>
    </div>

}