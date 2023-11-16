import {useState, useEffect} from "react";
import ListCard from "../components/ListCard";
import NoData from "../components/NoData";

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

const dummyUser = {
    firstName: "Bob",
    lastName: "The Cat"
}

let coinFlip = Math.round(Math.random())

export default function AccountPage() {

const [lists, setLists] = useState([])

useEffect(() => {
    const headers = new Headers()
    headers.append("Content-Type", "application/json")

    const options = {
        method: "GET",
        headers: headers
    }

    fetch("http://localhost:8080/lists", options)
        .then(res => res.json())
        .then(data=> setLists(data))
        .catch(err => console.error(err))
}, [])

console.log(lists)

    return <div className="container">
        <h1>Hi {dummyUser.firstName}!</h1>

        {coinFlip ? dummyData.map((elem, index) => <ListCard key={index} title={elem.name} link={elem.link} />) :
            <NoData message="You have no lists." />}
        <a href="/createlist"><button>Create New List</button></a>
    </div>

}