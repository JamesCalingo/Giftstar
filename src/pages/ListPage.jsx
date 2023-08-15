import React, { useState } from "react";
import ListItemCard from "../components/ListItemCard";
import AddItemModal from "../components/AddItemModal";

const list = {
    title: "My ultimate wishlist",
    description: "These are a few of my favo(u)rite things. Since this is a passion project in order to work on upskilling, consider helping me out?"
}

const items = [
    {name: "Steam Deck",
    link: "https://store.steampowered.com/steamdeck/"}
]

export default function ListPage() {
    const [isModalHidden, setIsModalHidden] = useState(true)

    return <div className="container">
    <h2>{list.title}</h2>
    <p>{list.description}</p>
   {items.map((item, index) => <ListItemCard key={index} name={item.name} image={item.image} link={item.link}/>) }
    <AddItemModal hidden={isModalHidden} />
    <button onClick={() => setIsModalHidden(!isModalHidden)}>Add Item</button>
    </div>
}