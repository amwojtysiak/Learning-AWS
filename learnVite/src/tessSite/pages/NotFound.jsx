import React from "react";
import { Link } from "react-router-dom"

export default function NotFound() {

    return (
        <>
            <h1>Error- Page not found</h1>
            <br/>
            <Link to="..">Return Home</Link>
        </>
    )
}