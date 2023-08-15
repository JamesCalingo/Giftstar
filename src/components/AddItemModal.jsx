import React from "react";
import InputField from "./InputField";

export default function AddItemModal(props) {
    return <>
    <div className="card" hidden={props.hidden}>
        <InputField name="name" label="Name" required/>
        <InputField name="link" label="Link to Product" required/>
        <label htmlFor="description">A brief description of why you'd like this (optional)</label>
        <input name="description" multiline />
        <InputField name="image" label="Image" type="image" />
        <button>Add</button>
        </div>
        </>
}