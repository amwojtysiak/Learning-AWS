import React from "react";
import { Link } from "react-router-dom";

export default function Projects() {

    return (
        <>
            <h1>Projects I'm working on: </h1>
            <br/>
            <ul>
                <li>
                    <Link to="/tessa-site" >Tessa's Site</Link> 
                </li>
            </ul>
        </>
    )
}