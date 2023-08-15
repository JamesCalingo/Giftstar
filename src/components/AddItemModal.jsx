import React from "react";
import InputField from "./InputField";

export default function AddItemModal(props) {
    return <>
    <div className="card" hidden={props.hidden}>
        <InputField name="name" label="Name" required/>
        <InputField name="link" label="Link to Product" required/>
        <label htmlFor="description">Why </label>
        <InputField name="image" label="Image" type="image" />
        <button>Add</button>
        </div>
        </>
}