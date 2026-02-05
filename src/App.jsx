import { Route, Routes } from "react-router";
import Header from "./component/Header";
import Recipes from "./component/Recipes";
import SearchBar from "./component/SearchBar";
import Sidebar from "./component/Sidebar";
import Product from "./Product";
import Category from "./Category";
import Support from "./Support";
import PageNotFound from "./PageNotFound";
import Food from "./Food";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              {<SearchBar />}
              {<Recipes />}
            </div>
          }
        />
        <Route element={<Food />} path="/:id" />
        {/* <Route element={<Category />} path="/category" /> */}
        {/* <Route element={<Food />} path="/recipe/:id" /> */}
        {/* <Route element={<Support />} path="/support" /> */}
        <Route element={<PageNotFound />} path="*" />
      </Routes>

      <Sidebar />
    </div>
  );
}
