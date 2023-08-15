import React from "react";

const styles = {
    item: {
        display: 'grid',
        gridTemplateColumns: '25% 75%',
    },
    left: {
        backgroundColor: 'grey',
    }
}

export default function ListItem(props) {
    return <div className="card" style={styles.item}>
        <div style={styles.left}>
            <p>IMAGINE AN IMAGE</p>
        </div>

        <div>
        <h4>ITEM NAME</h4>
        <p>No item link was provided for this.</p>
        <button>Claim this item</button>
        </div>

    </div>
}