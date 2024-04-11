import reactLogo from '../assets/react.svg'
//import '../../Styles/navbar.css'
import viteLogo from '/vite.svg'
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className='nav-box'>
            <img src={reactLogo} className="logo react" alt="React logo"></img>
            <img src={viteLogo} className="logo vite" alt="Vite logo"></img>
            <div className='nav-links-box'>
                <Link to="/" className='nav-link'>Home</Link>
                <Link to="projects" className='nav-link'>Projects</Link>
                <Link to="links" className='nav-link'>Helpful Links</Link>
            </div>
        </nav>
    )
}
