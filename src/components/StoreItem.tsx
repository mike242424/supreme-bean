import { Button, Card, Col, Row } from "react-bootstrap";
import { formatCurrency } from "../utlities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

interface StoreItemProps {
  name: string;
  id: number;
  price: number;
  imgUrl: string;
}

const StoreItem = ({ name, id, price, imgUrl }: StoreItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity: number = getItemQuantity(id);

  return (
    <Card className="h-100 shadow-lg">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span>{name}</span>
          <span className="ms-2">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto text-center">
          {quantity < 1 ? (
            <Button
              variant="dark"
              style={{ backgroundColor: "#45392c" }}
              onClick={() => increaseCartQuantity(id)}
            >
              Add To Cart
            </Button>
          ) : (
            <>
              <Row>
                <Col>
                  <Button
                    variant="dark"
                    style={{ backgroundColor: "#45392c" }}
                    onClick={() => decreaseCartQuantity(id)}
                  >
                    -
                  </Button>
                  <span className="ms-2 me-2">{quantity} in cart</span>

                  <Button
                    variant="dark"
                    style={{ backgroundColor: "#45392c" }}
                    onClick={() => increaseCartQuantity(id)}
                  >
                    +
                  </Button>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <Button
                    className="btn-danger"
                    onClick={() => removeFromCart(id)}
                  >
                    Remove
                  </Button>
                </Col>
              </Row>
            </>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
