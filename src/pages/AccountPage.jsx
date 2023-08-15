import React from "react";
import ListCard from "../components/ListCard";

export default function AccountPage() {
    return   <div className="container">
            <h1>My Account</h1>

            <p>You have no lists.</p>
            <ListCard />
            <a href="/createlist"><button>Create New List</button></a>
        </div>
    
}