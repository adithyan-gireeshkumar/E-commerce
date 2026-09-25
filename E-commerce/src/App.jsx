import Home from "@/pages/Home";
import Products from "@/pages/Products";
import ProductDetails from "@/pages/ProductDetails";

function App() {
  const path = window.location.pathname;

  if (path.startsWith("/products/")) {
    return <ProductDetails />;
  }

  return path === "/products" ? <Products /> : <Home />;
}

export default App;
