import React from "react";
import InputField from "../components/InputField";

const styles = {
    header: {
        textAlign: 'center'
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },

    logIn: {
        marginLeft: 30
    },
    inputField: {
        marginBottom: 10
    }
}

export default function MainPage() {

    return <div className="container">
        <div style={styles.header}>

            <h1 style={styles.header}>Welcome to Giftstar!</h1>
            <p>Create your perfect wishlist for any occasion!</p>
        </div>

        <div style={styles.content}>
            <div className="box" style={styles.logIn}>
                <p>Sign in</p>
                <InputField name="email" type="email" label="Email" />
                <InputField name="password" type="password" label="Password" />

                <a href="/account">
                    <button>Sign in</button>
                </a>
                <p><a href="/signup">Create account</a></p>
            </div>
            <div className="box">
                <h3>Welcome!</h3>
                <p>Whether you're planning something big or small, let Giftstar help you!</p>
            </div>
        </div>
    </div>
}


