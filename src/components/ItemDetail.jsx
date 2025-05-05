import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => (
  <div>
    <h2>{item.name}</h2>
    <p>{item.description}</p>
    <p>${item.price}</p>
    <ItemCount stock={10} initial={1} />
  </div>
);

export default ItemDetail;
