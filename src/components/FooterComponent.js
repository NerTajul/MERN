import { Container, Row, Col } from "react-bootstrap";
const FooterComponent = () => {
  return (
    <footer>
      <Container fluid>
        <Row className="md-5">
          <Col className="bg-dark text-white text-center py-5">
            Copyright &copy; NER Online Shop
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
