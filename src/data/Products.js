export const products = [
    { id: "1", name: "Remera", category: "ropa", description: "Remera de algodón", price: 2500 },
    { id: "2", name: "Pantalón", category: "ropa", description: "Pantalón de jean", price: 4500 },
    { id: "3", name: "Zapatillas", category: "calzado", description: "Zapatillas deportivas", price: 8000 },
  ];
  
  export const getProducts = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve(products), 1000);
    });
  };
  
  export const getProductById = (id) => {
    return new Promise(resolve => {
      setTimeout(() => resolve(products.find(p => p.id === id)), 1000);
    });
  };
  
  export const getProductsByCategory = (category) => {
    return new Promise(resolve => {
      setTimeout(() => resolve(products.filter(p => p.category === category)), 1000);
    });
  };
  