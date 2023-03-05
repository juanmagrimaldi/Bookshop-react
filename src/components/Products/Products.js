import { useContext ,useState, useEffect } from "react";
import { DataContext } from "../Context/DataContext";
import axios from "axios";

import "./Products.css";

const Products = () => {
  const [data, setData] = useState([]);
  const { buyProducts } = useContext(DataContext);

  useEffect(() => {
    axios("data.json").then((res) => setData(res.data));
  }, []);

  return data.map((product) => {
    return (
      <div className="card" key={product.id}>
        <img src={product.img} alt="product-card-img"/>
        <h3>{product.name}</h3>
        <h4>${product.price}</h4>
        <button onClick={()=> buyProducts(product)}>Comprar</button>
      </div>
    )
  })
}
export default Products