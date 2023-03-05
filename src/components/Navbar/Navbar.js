import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { Link } from "react-router-dom";

import TotalItems from "../CartContent/TotalItems";

import "./Navbar.css";

const Navbar = () => {
  const {cart} = useContext(DataContext);
  return (
    <div className='nav-container'>
        <nav className='navbar'>
          <Link to={"/"}>
            <h1 className='navbar-logo'>Bookshop📚</h1>
          </Link>
            <Link className="seeCarrito" to={"/cart"}>
              🛒
              {cart.length > 0 ? <TotalItems/> : null}
            </Link>
        </nav>
    </div>
  )
}

export default Navbar