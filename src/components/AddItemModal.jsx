import React from "react";
import InputField from "./InputField";

export default function AddItemModal() {
    return <>
    <div className="card">
        <InputField name="name" label="name" />
        <InputField name="link" label="Link to Product" />
        <InputField name="image" label="Image" type="image" />
        </div>
        </>
}