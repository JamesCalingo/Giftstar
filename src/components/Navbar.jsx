import React from "react";

const styles = {
    navbar: {
        height: '3%',
        backgroundColor: 'white',
        color: 'black'
    }
}

export default function Navbar(props) {
    return <>
    <div style={styles.navbar}>
        <p>Giftstar</p>
    </div>
    
    </>
}