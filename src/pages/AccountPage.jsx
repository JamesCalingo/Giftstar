import React from "react";
import ListCard from "../components/ListCard";

const dummyUser = {
    firstName: "Bob",
    lastName: "The Cat"
}

const dummyData = [
    {
        title: "List 1",
        link: "/list"
    },
    {
        title: "The blanking list",
        link: "/list"
    }
]

let coinFlip = Math.round(Math.random())

export default function AccountPage() {
    return <div className="container">
        <h1>Hi {dummyUser.firstName}!</h1>

        {coinFlip ? dummyData.map((elem, index) => <ListCard key={index} title={elem.title} link={elem.link} />) :
            <p>You have no lists.</p>}
        <a href="/createlist"><button>Create New List</button></a>
    </div>

}