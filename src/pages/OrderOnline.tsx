import { Col, Container, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import StoreItem from "../components/StoreItem";

const OrderOnline = (): JSX.Element => {
  return (
    <Container className="mb-4 mt-3">
      <h1 className="text-center pb-3 pt-2" style={{ color: "#45392c" }}>
        <strong>Order Online</strong>
      </h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OrderOnline;
