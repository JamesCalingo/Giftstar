import React from "react";
import InputField from "./InputField";

export default function SignUpModal(props) {
    return  <div className="card modal" hidden={props.hidden}>
        <h2>Sign Up</h2>

            <InputField name="email" type="email" label="Email" />
            <InputField name="password" type="password" label="Password" />
            <InputField name="confirmPassword" type="password" label="Confirm Password" />
            <InputField name="firstName" label="First Name" />
            <InputField name="lastName" label="Last Name" />

            <a href="/account">
                <button>Sign Up</button>
            </a>
            <button onClick={props.cancelModal}>Cancel</button>
        </div>

}