import React, { useState } from "react";
import ListItemCard from "../components/ListItemCard";
import AddItemModal from "../components/AddItemModal";
import NoData from "../components/NoData";

let coinFlip = Math.round(Math.random())

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

export default function ListPage() {
    const [isModalHidden, setIsModalHidden] = useState(true)

    return <div className="container">
        <h2>{list.title}</h2>
        <p>{list.description}</p>
        <button onClick={() => setIsModalHidden(!isModalHidden)}>Add Item</button>
        <AddItemModal hidden={isModalHidden} />
        {items && items.length && coinFlip ? items.map((item, index) => <ListItemCard key={index} name={item.name} image={item.image} link={item.link} claimed={item.claimed}/>) : <NoData message="There are no items in this list." />}
      
    </div>
}