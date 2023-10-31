import { Routes, Route } from 'react-router-dom';
import {
  Products,
  ProductList,
  ProductDetail,
  Search,
  PageNotFound,
  Categories,
} from '../pages';

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path=""
          element={<ProductList />}
        />
        {/* <Route
          path="/"
          element={<Categories />}
        /> */}
        {/* <Route
          path=""
          element={<Products />}
        /> */}
        <Route
          path="products/:id"
          element={<ProductList />}
        />
        <Route
          path="products/:id"
          element={<ProductDetail />}
        />
        <Route
          path="products/title"
          element={<ProductList />}
        />
        <Route
          path="products/detail"
          element={<ProductDetail />}
        />

        <Route
          path="search"
          element={<Search />}
        />
        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Routes>
    </div>
  );
};
