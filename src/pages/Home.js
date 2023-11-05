import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../assets/images/banner nyx.gif';
import { ProductList } from './ProductList';
import { Search } from './Search';

import { Card } from '../components';

export const Home = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter, show] = useState(data);

  useEffect(() => {
    getBrand();
  }, []);
  const getBrand = async () => {
    const response = await fetch(
      'http://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx'
    );
    setData(await response.json());
    console.log(data);
    setFilter(data);
  };

  const filterProducts = (category) => {
    const updatedItems = data.filter((item) => item.product_type === category);
    console.log(updatedItems);
    setFilter(updatedItems);
  };

  return (
    <main>
      <Link to="/products">
        <img
          className=""
          src={Hero}
          alt="Banner1"
        />
      </Link>
      <div>
        <div className="bg-pink-500 pt-5 pl-20 pr-20">
          <Search />
          <h1 className="text-center text-3xl font-bold">BEST SELLERS</h1>
          <p className="text-center hover:text-white	">
            <Link to="/products">Shop Now</Link>
          </p>
          <section className=" bg-sky-700 container flex flex-wrap max-w-7x1 mx-auto py-7 items-center rounded-lg text-center">
            <div className="flex flex-wrap inline-grid grid-cols-4 gap-x-1 gap-y-4 ">
              {filter.map((product) => (
                <Card
                  key={product.id}
                  data={product}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};
