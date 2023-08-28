import React from "react";

const styles = {
    listCard: {
        // margin: 20
    }
}

export default function ListCard(props) {
    return <div className="card" style={styles.listCard}>
        <h3>{props.title}</h3>
        <a href={props.link}><button>View List</button></a>
        <p>Share this list: {props.link}</p>
    </div>
}