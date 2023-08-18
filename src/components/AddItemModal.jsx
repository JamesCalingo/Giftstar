import React from "react";
import InputField from "./InputField";

function AddItemModal(props) {
    return <>
    <div className="card" hidden={props.hidden}>
        <InputField name="name" label="Name" required/>
        <InputField name="link" label="Link to Product" required/>
        <label htmlFor="description">A brief description of why you'd like this (optional)</label>
        <input name="description" multiline="true" />
        <InputField name="image" label="Image URL" />
        <button>Add</button>
        </div>
        </>
}