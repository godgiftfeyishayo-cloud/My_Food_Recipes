import Header from "./component/Header";
import Recipes from "./component/Recipes";
import SearchBar from "./component/SearchBar";
import Sidebar from "./component/Sidebar";

export default function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <Recipes />
      <Sidebar />
    </div>
  );
}
