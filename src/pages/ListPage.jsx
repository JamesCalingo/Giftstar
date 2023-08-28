import React, { useState } from "react";
import ListItemCard from "../components/ListItemCard";
import NoData from "../components/NoData";

import { handleSetValue } from "../utils/utils";

const list = {
    title: "My ultimate wishlist",
    description: "These are a few of my favo(u)rite things."
}



const dummyItem = {
    name: "DUMMY THICC", 
    link: ""
}


export default function ListPage() {
    const [isModalHidden, setIsModalHidden] = useState(true)
    const [items, setItems] = useState([])
    const [newItem, setNewItem] = useState({
        name: "",
        link: "",
        description: "",
        image: "",
    })

    function AddItemModal() {
        return <div className="card" hidden={isModalHidden}>
            <div>
                <label htmlFor="productName">Name*</label> <br />
                <input name="productName" onChange={(event) => handleSetValue(newItem, setNewItem, event.target.value, "name")}/>
            </div>
            <div>

                <label htmlFor="link">Link to buy</label> <br />
                <input name="link" onChange={(event) => handleSetValue(newItem, setNewItem, event.target.value, "link")}/>
            </div>
            <div>
                <label htmlFor="description">A brief description of why you'd like this (optional)</label> <br />
                <input name="description" multiline="true" onChange={(event) => handleSetValue(newItem, setNewItem, event.target.value, "description")}/>
            </div>
            <div>
                <label htmlFor="image">Image URL (optional)</label> <br />
                <input name="image" onChange={(event) => handleSetValue(newItem, setNewItem, event.target.value, "image")}/>
            </div>
                <button onClick={() => handleAddItem()}>Add</button>
                <button className="cancel" onClick={() => setIsModalHidden(true)}>Cancel</button>
            </div>
    }

    function handleAddItem() {
        console.log(newItem)
        setItems([...items, newItem]),
        setNewItem({
            name: "",
            link: "",
            description: "",
            image: "",
        })
        setIsModalHidden(true)
    }

    return <div className="container">
        <div>
        <h2>{list.title}</h2>
        <p>{list.description}</p>
        </div>
        <button style={{marginBottom: 10}} onClick={() => setIsModalHidden(!isModalHidden)}>Add Item</button>
        {AddItemModal()}
        {items && items.length ? items.map((item, index) => <ListItemCard key={index} name={item.name} image={item.image} link={item.link} claimed={item.claimed} />) : <NoData message="There are no items in this list." />}

    </div>
}