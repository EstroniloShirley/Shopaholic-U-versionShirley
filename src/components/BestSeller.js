import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components';

export const BestSeller = ({ products }) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [id, title, category, price] = data;
  useEffect(() => {
    getCategorized();
  }, []);

  const getCategorized = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    setData(await response.json());
    setFilter(data);
    console.log(data);
  };

  const filterProducts = (category) => {
    const updatedItems = data.filter((item) => item.category === category);
    console.log(updatedItems);
    setFilter(updatedItems);
  };

  return (
    <div>
      <div className="text-center text-4xl font-extrabold underline-offset-4	mb-5 leading-relaxed">
        <h1 className="text-center text-4xl font-extrabold underline-offset-4	mb-5 leading-relaxed">
          Best Selling Products
        </h1>
      </div>
      <section className="container flex flex-wrap max-w-7x1 mx-auto py-7 items-center rounded-lg">
        <div className="flex flex-wrap inline-grid grid-cols-4 gap-4">
          {filter.map((product) => (
            <Card
              key={product.id}
              data={product}
            />
          ))}
        </div>
      </section>{' '}
    </div>
  );
};
