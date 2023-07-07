import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

const CustomNav = (): JSX.Element => {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <Navbar
      sticky="top"
      className="shadow-sm p-4"
      style={{ backgroundColor: "#BDAB98" }}
    >
      <Container>
        <Nav>
          <Nav.Link to="/" as={NavLink} style={{ color: "#45392c" }}>
            <strong>Home</strong>
          </Nav.Link>
          <Nav.Link to="/menu" as={NavLink} style={{ color: "#45392c" }}>
            <strong>Menu</strong>
          </Nav.Link>
          <Nav.Link
            to="/order-online"
            as={NavLink}
            style={{ color: "#45392c" }}
          >
            <strong> Order Online</strong>
          </Nav.Link>
        </Nav>
        <Button
          variant="dark"
          style={{
            backgroundColor: "#45392c",
            position: "relative",
            color: "#FFF",
            marginRight: "8px",
          }}
          onClick={openCart}
        >
          Cart
          {cartQuantity > 0 ? (
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                height: "1.5rem",
                width: "1.5rem",
                position: "absolute",
                bottom: -3,
                right: 8,
                transform: "translate(25%, 55%)",
              }}
            >
              {cartQuantity}
            </div>
          ) : (
            ""
          )}
        </Button>
      </Container>
    </Navbar>
  );
};

export default CustomNav;
