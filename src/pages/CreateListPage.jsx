import React from "react";
import InputField from "../components/InputField";

export default function CreateListPage() {
    return <>
        <h1>Create New List</h1>

        <div>
        <InputField name="name" label="Name" />
        <InputField name="occasion" label="This list is for a:" />
        {/* This one's different since it's multiline */}
        <label htmlFor="description">Description</label>
        <input name="description" />

        <button>Create List</button>
        </div>
    </>
}