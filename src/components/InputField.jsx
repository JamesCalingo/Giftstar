import React from "react";

export default function InputField(props) {
    return <div style={{width: '100 %'}}>
        <label htmlFor={props.name}>{props.label}{props.required ? '*': null}</label><br />
        <input name={props.name} type={props.type} value={props.value} onChange={props.onChangeFunction}/>
    </div>

}