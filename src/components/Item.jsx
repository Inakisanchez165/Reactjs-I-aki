import { Link } from "react-router-dom";

const Item = ({ item }) => (
  <div>
    <h2>{item.name}</h2>
    <p>{item.description}</p>
    <p>${item.price}</p>
    <Link to={`/item/${item.id}`}>Ver más</Link>
  </div>
);

export default Item;
