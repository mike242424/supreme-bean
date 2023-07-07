import { Col, Container, Row } from "react-bootstrap";

const Home = (): JSX.Element => {
  return (
    <Container fluid className="homepage-container">
      <Row>
        <Col>
          <Container
            className="bg-light mb-5"
            style={{ borderRadius: "5px", width: "70%" }}
          >
            <h1 className="text-center pt-4 mt-5" style={{ fontSize: "50px" }}>
              <strong>Supreme Bean</strong>
            </h1>
            <h5 className="ps-4 pe-4 pt-4">
              Welcome to our coffee haven! At our coffee company, we are
              passionate about delivering exceptional coffee experiences to all
              our customers. Whether you're a coffee connoisseur or simply
              someone who enjoys a good cup of joe, we've got you covered.
            </h5>
            <h5 className=" ps-4 pe-4 pt-2">
              Indulge in the rich and robust flavors of our carefully sourced
              and expertly roasted coffee. We believe that great coffee starts
              with exceptional beans, which is why we meticulously select the
              finest coffee beans from renowned coffee-growing regions around
              the world.
            </h5>
            <h5 className="ps-4 pe-4 pt-2 pb-4">
              Join us on a coffee adventure and explore our range of premium
              coffee offerings. We believe that every cup should be an
              extraordinary experience, and we're here to make that happen for
              you. Discover the passion and artistry that goes into each cup we
              serve.
            </h5>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
