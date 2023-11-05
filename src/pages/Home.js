import { Hero } from './Hero';
import { NavBar, BestSeller, ProductList } from '../components';
import { Search } from './Search';

export const Home = () => {
  return (
    <main>
      <Hero />
      <Search />
      <ProductList />
    </main>
  );
};
