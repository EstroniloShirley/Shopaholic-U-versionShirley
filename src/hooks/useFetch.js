// import { useState, useEffect } from 'react';

// export const useFetch = () => {
//   const [products, setProducts, filter, setFilter] = useState([]);
//   const url = 'https://fakestoreapi.com/products';

//   useEffect(() => {
//     getProducts();
//   }, [url]);

//   const getProducts = async (url) => {
//     const response = await fetch(url);
//     setProducts(await response.json(products));
//     // console.log(response);

//     setFilter(products);
//   };

//   const filterProduct = (items) => {
//     const updatedItems = products.filter((item) => item.products === items);
//     // setFilter(updatedItems);
//     console.log(updatedItems);
//   };

//   return { products };
// };
