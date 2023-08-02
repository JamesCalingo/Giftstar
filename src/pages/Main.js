import React from "react";
import InputField from "../components/InputField";

export default function Main() {

    return <div className="container">
        <div style={styles.header}>

            <h1 style={styles.header}>Welcome to Giftstar!</h1>
            <p>Create your perfect wishlist for any occasion!</p>
        </div>

        <div style={styles.content}>
            <div className="box" style={styles.logIn}>
                <p>Sign in</p>
                <InputField name="email" label="Email" />
                <InputField name="password" label="Password" />

                <button>Sign in</button>
                <p><a href="https://www.wikipedia.org">Sign up</a></p>
            </div>
            <div className="box">
                <h3>Welcome!</h3>
                <p>Whether you're planning something big or small, let Giftstar help you!</p>
            </div>
        </div>
    </div>
}

const styles = {
    header: {
        textAlign: 'center'
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
   
    logIn: {
        marginLeft: 30
    },
    inputField: {
        marginBottom: 10
    }
}