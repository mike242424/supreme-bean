import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import { formatCurrency } from "../utlities/formatCurrency";
import storeItems from "../data/items.json";

interface ShoppingCartProps {
  isOpen: boolean;
}

const ShoppingCart = ({ isOpen }: ShoppingCartProps): JSX.Element => {
  const { closeCart, cartItems } = useShoppingCart();

  return (
    <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title style={{ color: "#45392c" }}>
          Shopping Cart
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <h5 className="ms-auto fw-bold mt-4">
            Subtotal:{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const storeItem = storeItems.find(
                  (item) => item.id === cartItem.id
                );
                return total + (storeItem?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </h5>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
