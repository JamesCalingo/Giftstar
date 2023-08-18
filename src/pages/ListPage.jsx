import React, { useState } from "react";
import ListItemCard from "../components/ListItemCard";
import NoData from "../components/NoData";


const list = {
    title: "My ultimate wishlist",
    description: "These are a few of my favo(u)rite things. Since this is a passion project in order to work on upskilling, consider helping me out?"
}

const items = [
    {
        name: "Steam Deck",
        link: "https://store.steampowered.com/steamdeck/",
        claimed: false
    },
    {
        name: "ALL THE AFL THINGS",
        link: "https://www.theaflstore.com.au",
        claimed: false
    },
    {
        name: "Claimed Item",
        link: "",
        claimed: true
    }
]

const dummyItem = {
    name: "DUMMY THICC", 
    link: ""
}


export default function ListPage() {
    const [isModalHidden, setIsModalHidden] = useState(true)
    const [newItem, setNewItem] = useState([])

    function AddItemModal() {
        return <div className="card" hidden={isModalHidden}>
            <div>
                <label htmlFor="productName">Name*</label> <br />
                <input name="productName" />
            </div>
            <div>

                <label htmlFor="link">Link to buy</label> <br />
                <input name="link" />
            </div>
            <div>
                <label htmlFor="description">A brief description of why you'd like this (optional)</label> <br />
                <input name="description" multiline="true" />
            </div>
            <div>
                <label htmlFor="image">Image URL (optional)</label> <br />
                <input name="image" />
            </div>
                <button onClick={() => {items.push(dummyItem); console.log(items)}}>Add</button>
            </div>
    }

    return <div className="container">
        <h2>{list.title}</h2>
        <p>{list.description}</p>
        <button onClick={() => setIsModalHidden(!isModalHidden)}>Add Item</button>
        {AddItemModal()}
        {items && items.length ? items.map((item, index) => <ListItemCard key={index} name={item.name} image={item.image} link={item.link} claimed={item.claimed} />) : <NoData message="There are no items in this list." />}

    </div>
}