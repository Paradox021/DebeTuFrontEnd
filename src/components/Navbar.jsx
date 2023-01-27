import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="flex gap-4 mb-4 justify-center">
            <Link to="/"> Home </Link>
            <Link to="/chat"> Chat </Link>
            <Link to="/users"> Users </Link>
            <Link to="/adduser"> Add user </Link>
            <Link to="/logIn"> Log in </Link>
        </nav>
    )   
}

export default Navbar