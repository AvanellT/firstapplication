import { NavLink } from "react-router-dom";
import "../style/nav.css";

const Menu = () => {
    return (
        <div className="topNav">
            <NavLink className="topNavA" to="/">Home</NavLink>
            <NavLink className="topNavA" to="/AboutUs">About Us</NavLink>
            <NavLink className="topNavA" to="/LocalStore">Local Store</NavLink>
            <NavLink className="topNavA" to="/contact">Contact</NavLink>
        </div>
    );
}
export default Menu;