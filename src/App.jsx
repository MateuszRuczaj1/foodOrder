import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartProvider } from "./contexts/CartContext";
import { ModalContextProvider } from "./contexts/ModalContext";
import Checkout from "./components/Checkout";
function App() {

  return (
    <>
      <ModalContextProvider>
        <CartProvider>
          <Header />
          <Meals />
          <Checkout />
        </CartProvider>
      </ModalContextProvider>
    </>
  );
}

export default App;
