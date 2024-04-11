// import React from "react";
// import ReactDOM from "react-dom/client";


// ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"))
//  const root = ReactDOM.createRoot(document.getElementById("root"))
//  root.render(navbar)


// const h1 = document.createElement("h1")
// h1.textContent = "This is an imperative way to program";
// h1.className = "header";
// document.getElementById("root").append(h1);

import Footer from "./Footer.js";

function Header() {
    return <h1 className="page-title">React Learning Space</h1>
}

function NavBar() {
    return (
        <nav className="nav-box">
            <img className="logo-img" src="./images/react_logo.png" />
            <ul className="nav-items">
                <li>Topics</li>
                <li>Info</li>
                <li>Sources</li>
            </ul>
        </nav>
    )
}

function MainContent() {
    return (
        <div>
            <h2>Current Thoughts:</h2>
            <p>
                React is very interesting and seems very useful. It is a declaritive language and its composability makes it a strongly effective tool for rendering html to a webpage.
            </p>
            <br/>
            <h3>Current Difficulty:</h3>
            <p className="diffLevel">EASY</p>
            <br/>
        </div>
    )
}

function App() {
    return (
        <>
            <NavBar />
            <Header />
            <MainContent />
        </>
    )
}


ReactDOM.createRoot(document.getElementById("root")).render(<App />)
ReactDOM.createRoot(document.getElementById("foot")).render(<Footer />)