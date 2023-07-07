import { Button, Col, Container, Row } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

interface CartIdProps {
  id: number;
  quantity: number;
}

const CartItem = ({ id, quantity }: CartIdProps): JSX.Element | null => {
  const { removeFromCart } = useShoppingCart();
  const storeItem = storeItems.find((item) => item.id === id);
  if (storeItem == null) return null;

  return (
    <Container className="border-top d-flex align-items-center">
      <Row>
        <img
          src={storeItem.imgUrl}
          style={{
            width: "225px",
            height: "auto",
            marginTop: "20px",
            marginBottom: "5px",
          }}
        />
      </Row>
      <Row className="ms-4">
        <Col>
          <h6 className="mt-2">
            <strong>{storeItem.name}</strong>
          </h6>
          {formatCurrency(storeItem.price)}
          {quantity && (
            <p className="text-secondary mt-2">Quantity: {quantity}</p>
          )}
          <Button
            className="btn-danger"
            onClick={() => removeFromCart(storeItem.id)}
          >
            Remove
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CartItem;
