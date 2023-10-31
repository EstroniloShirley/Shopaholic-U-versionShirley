import { useState, useEffect } from 'react';

import { Card } from '../components';

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(products);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    setProducts(await response.json(products));
    console.log(response);

    setFilter(products);
  };

  const filterProduct = (items) => {
    const updatedItems = products.filter((item) => item.products === items);
    // setFilter(updatedItems);
    console.log(updatedItems);
  };

  return (
    <main>
      <section className="max-w-7x1 mx-auto py-7">
        <div className="flex justify-start flex-wrap bg-sky-900 other:justify-evenly">
          {products.map((data) => (
            <Card
              key={data.id}
              data={data}
            />
          ))}
          {/* <Card /> */}
        </div>
      </section>
    </main>
  );
};
