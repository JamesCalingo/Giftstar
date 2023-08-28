import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleSetValue } from "../utils/utils";

const styles = {
    button: {
        margin: 10
    }
}

export default function SignUpModal(props) {
    const [newUser, setNewUser] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
    })
    const [confirmPassword, setConfirmPassword] = useState("")

    const navigate = useNavigate()

    function onClickSignUp() {
        if (!newUser.email || !newUser.password || !newUser.firstName || !newUser.lastName || !confirmPassword) {
            alert("You haven't filled in one of the fields. Please fill in all fields and then try again.")
            return
        }
        if (newUser.password !== confirmPassword) {
            alert("Your passwords don't match. Please check your passwords and try again.")
            return
        }
        console.log(newUser)
        navigate("/account")
    }
    return <div className="card modal" hidden={props.hidden}>
        <div className="centered">

        <h2>You're one step away from your perfect wishlist - Sign Up now!</h2>
        <p>(All fields are required)</p>
        </div>

        <div>
            <label htmlFor="email">Email</label> <br />
            <input name="email" id="email" type="email" value={newUser.email} onChange={(event) => handleSetValue(newUser, setNewUser, event.target.value, "email")} />
        </div>

        <div>
            <label htmlFor="password">Password</label> <br />
            <input name="password" id="password" type="password" value={newUser.password} onChange={(event) => handleSetValue(newUser, setNewUser, event.target.value, "password")} />
        </div>

        <div>
            <label htmlFor="confirmPassword">Confirm Password</label> <br />
            <input name="confirmPassword" id="confirmPassword" type="password" onChange={(event) => setConfirmPassword(event.target.value)} />
        </div>

        <div>
            <label htmlFor="firstName">First Name</label> <br />
            <input name="firstName" id="firstName" value={newUser.firstName} onChange={(event) => handleSetValue(newUser, setNewUser, event.target.value, "firstName")} />
        </div>

        <div>
            <label htmlFor="lastName">Last Name</label> <br />
            <input name="lastName" id="lastName" value={newUser.lastName} onChange={(event) => handleSetValue(newUser, setNewUser, event.target.value, "lastName")} />
        </div>
        <div className="centered">

        <button style={styles.button} onClick={() => onClickSignUp()}>Sign Up</button>
        <button style={styles.button} onClick={props.cancelModal}>Cancel</button>
        </div>
    </div>

}