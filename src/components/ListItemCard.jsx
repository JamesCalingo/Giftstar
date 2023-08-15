import React from "react";

const styles = {
    item: {
        display: 'grid',
        gridTemplateColumns: '24.5% 74.5%',
        justifyContent: 'space-between',
        marginBottom: 15
    },
    left: {
        backgroundColor: 'grey',
    }
}

export default function ListItemCard(props) {
    return <div className="card" style={styles.item}>
        <div style={styles.left}>
            {props.image ? props.image : <p style={{textAlign: 'center'}}>No image provided</p>}
        </div>

        <div>
            <h4>{props.name}</h4>
            {props.link ? <p><a href={props.link} target="blank">Purchase here</a></p> : <p>No item link was provided for this.</p>}
            <button>Claim this item</button>
        </div>

    </div>
}