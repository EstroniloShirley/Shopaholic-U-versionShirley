import { Routes, Route } from 'react-router-dom';

import {
  Carousel,
  Products,
  Home,
  ProductDetail,
  Search,
  PageNotFound,
} from '../pages';

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path=""
          element={<Home />}
        />

        <Route
          path="/Products"
          element={<Products />}
        />

        <Route
          path="products/:id"
          element={<ProductDetail />}
        />

        <Route
          path="products/detail"
          element={<ProductDetail />}
        />
        <Route
          path="Jewelry"
          element={<ProductDetail />}
        />
        <Route
          path="products/detail"
          element={<ProductDetail />}
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
