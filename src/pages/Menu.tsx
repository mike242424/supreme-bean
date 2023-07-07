import { Card, Col, Container, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utlities/formatCurrency";

const Menu = (): JSX.Element => {
  return (
    <Container className="mb-4 mt-3">
      <h1 className="text-center pb-3 pt-2" style={{ color: "#45392c" }}>
        <strong>Menu</strong>
      </h1>
      <Card className="shadow-lg">
        <Card.Body>
          {storeItems.map((item, index) => (
            <Row className="mt-2">
              <Col sm={12} md={6}>
                <img
                  src={item.imgUrl}
                  style={{ objectFit: "cover" }}
                  width="200px"
                  className="mb-3 ms-2"
                />
              </Col>
              <Col sm={12} md={6}>
                <Card.Title key={item.id}>
                  <Col>
                    <p>{item.name}</p>
                    <h6>{formatCurrency(item.price)}</h6>
                    <h6>{item.description}</h6>
                  </Col>
                </Card.Title>
              </Col>
              {index !== storeItems.length - 1 && (
                <hr
                  style={{
                    marginTop: "9px",
                    width: "95%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
              )}
            </Row>
          ))}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Menu;
