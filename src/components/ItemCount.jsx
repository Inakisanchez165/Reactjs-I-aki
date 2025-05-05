
import { useState } from "react";

const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(initial);

  return (
    <div>
      <button disabled={count <= 1} onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button disabled={count >= stock} onClick={() => setCount(count + 1)}>+</button>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
