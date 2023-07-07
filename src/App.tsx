import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OrderOnline from "./pages/OrderOnline";
import Menu from "./pages/Menu";
import CustomNav from "./components/CustomNav";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

const App = (): JSX.Element => {
  return (
    <ShoppingCartProvider>
      <CustomNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </ShoppingCartProvider>
  );
};

export default App;
