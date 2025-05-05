import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/Products";
import ItemDetail from "../components/ItemDetail";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getProductById(itemId).then(setItem);
  }, [itemId]);

  return item ? <ItemDetail item={item} /> : <p>Cargando...</p>;
};

export default ItemDetailContainer;
