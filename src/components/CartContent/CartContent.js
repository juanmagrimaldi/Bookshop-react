import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import Navbar from "../Navbar/Navbar";

import CartElements from "./CartElements";
import CartTotal from "./CartTotal";

const CartContent = () => {
  const { cart } = useContext(DataContext);
  
  return (
    <>
      <Navbar/>
      {cart.length > 0 ? (
      <>
        <CartElements/>
        <CartTotal/>
      </>
    ) : (
      <h2 className="cart-message-center">¡Carrito de compras vacío!</h2>
    )}
  </>
  )
}

export default CartContent