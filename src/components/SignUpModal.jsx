import React, { useState } from "react";
import InputField from "./InputField";

export default function SignUpModal(props) {
    const [newUser, setNewUser] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
    })

    function handleSetValue(value, field) {

    }

    return <div className="card modal" hidden={props.hidden}>
        <h2>You're one step away from your perfect wishlist - Sign Up now!</h2>
        <p>(All fields are required)</p>

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