import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="flex gap-4 mb-4">
            <Link to="/"> Home </Link>
            <Link to="/chat"> Chat </Link>
            <Link to="/user"> Users </Link>
            <Link to="/addUser"> Add user </Link>
        </nav>
    )
}
export default Navbar