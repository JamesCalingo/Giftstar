import React, { useState } from "react";
import InputField from "../components/InputField";
import SignUpModal from "../components/SignUpModal";

const styles = {
    header: {
        textAlign: 'center'
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30
    },

    logIn: {
        width: '25%',
    },
    search: {
        width: '70%'
    },
    inputField: {
        marginBottom: 10
    }
}

export default function MainPage() {

    const [isModalHidden, setIsModalHidden] = useState(true)
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    function handleSetValue(value, field) {
        setUser({ ...user, [field]: value })
    }

    function onClickLogin() {
        if(!user.email || !user.password){
            alert("Please enter an email and password.")
            return
        }
    }

    return <div>
        <div className="container">
            <div style={styles.header}>

                <h1 style={styles.header}>Welcome to Giftstar!</h1>
                <p>Create your perfect wishlist for any occasion!</p>
            </div>
            <SignUpModal hidden={isModalHidden} cancelModal={() => setIsModalHidden(true)} />
            <div style={styles.content}>
                <div className="card" style={styles.logIn}>
                    <h3>Sign in</h3>
                    <div id="alert"></div>
                    <div>
                        <label htmlFor="email">Email*</label> <br />
                        <input name="email" id="email" type="email" value={user.email} onChange={(event) => handleSetValue(event.target.value, "email")} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label> <br />
                        <input name="password" id="password" type="password" value={user.password} onChange={(event) => handleSetValue(event.target.value, "password")} />
                    </div>

                    <a href="/account">
                        <button>Sign in</button>
                    </a>
                    <p onClick={() => setIsModalHidden(false)}>Create account</p>
                </div>
                <div className="card" style={styles.search}>
                    <h3>Find a list</h3>
                    <p>If someone you know is using our site for their gift list, you can search for it here! Simply search for their name or the name of their list, and we'll do our best to find it for you.</p>
                    <input type="search" name="search" /> <br />
                    <button>Search</button>
                </div>
            </div>
            <div className="card">
                <h3>Welcome!</h3>
                <p>Whether you're planning something big or small, let Giftstar help you!</p>
                <p>This is a thing</p>
            </div>
        </div>
    </div>
}


