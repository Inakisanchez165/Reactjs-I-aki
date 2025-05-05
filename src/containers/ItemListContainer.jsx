import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../data/Products";
import ItemList from "../components/ItemList";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = categoryId ? getProductsByCategory : getProducts;
    fetchData(categoryId).then(setItems);
  }, [categoryId]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
