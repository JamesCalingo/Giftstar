import React from "react";

const styles = {
    item: {
        display: 'grid',
        gridTemplateColumns: '29.5% 69.5%',
        justifyContent: 'space-between',
        padding: 15,
        height: '250px'
    },
    left: {
        backgroundColor: 'grey',
        borderRadius: 3
    }
}

export default function ListItemCard(props) {
    return <div className="card" style={styles.item}>
        <div style={styles.left}>
            {props.image ? props.image : <p style={{ textAlign: 'center' }}>No image provided</p>}
        </div>

        <div>
            <h4>{props.name}</h4>
            {props.claimed ? <p>This item has been claimed already.</p> :
                <div>
                    {props.link ? <p><a href={props.link} target="blank">Purchase here</a></p> : <p>No item link was provided for this.</p>}
                    <button>Claim this item</button>
                    
                    {/* For list creator's eyes only
                    <button>Delete Item</button> */}
                </div>
            }
        </div>

    </div>
}