import { Routes, Route } from 'react-router-dom';
import { ProductList, ProductDetail, Search, PageNotFound } from '../pages';

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path=""
          element={<ProductList />}
        />
        <Route
          path="movie/:id"
          element={<ProductDetail />}
        />
        <Route
          path="movies/popular"
          element={<ProductList />}
        />
        <Route
          path="movies/top"
          element={<ProductList />}
        />
        <Route
          path="movies/upcoming"
          element={<ProductList />}
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
    </>
  );
};
