import React from "react"
import { handleSetValue } from "../utils/utils"

const styles = {

}

export default function signIn() {

    return <div className="card" style={styles.logIn}>
        <h3>Sign in</h3>
        <div id="alert"></div>
        <div>
            <label htmlFor="email">Email*</label> <br />
            <input name="email" id="signInEmail" type="email" value={user.email} onChange={(event) => handleSetValue(user, setUser, event.target.value, "email")} />
        </div>
        <div>
            <label htmlFor="password">Password</label> <br />
            <input name="password" id="signInPassword" type="password" value={user.password} onChange={(event) => handleSetValue(user, setUser, event.target.value, "password")} />
        </div>

        <button onClick={() => onClickLogin()}>Sign in</button>

        <p onClick={() => setIsModalHidden(false)}>Create account</p>
    </div>
}