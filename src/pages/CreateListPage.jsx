import React from "react";
import InputField from "../components/InputField";

export default function CreateListPage() {
    return <div className="container">
        <h1>Create New List</h1>

        <div>
            <div className="card">
            <InputField name="name" label="Name" required/>
            <InputField name="occasion" label="This list is for a:" />
            {/* This one's different since it's multiline */}
            <label htmlFor="description">Description</label> <br />
            <input name="description" />
            </div>

            <div>

            <a href="/list">
                <button>Create List</button>
            </a>
            </div>
        </div>
    </div>
}