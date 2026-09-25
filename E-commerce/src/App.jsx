import Home from "@/pages/Home";
import Products from "@/pages/Products";

function App() {
  return window.location.pathname === "/products" ? <Products /> : <Home />;
}

export default App;
