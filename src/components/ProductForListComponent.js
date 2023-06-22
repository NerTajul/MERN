import { Card, Button, Row, Col } from "react-bootstrap";
import {RatingView} from "react-simple-star-rating";


const ProductForListComponent = () => {
  return (
    <>
    <Card style={{ marginTop: "30px", marginBottom:"50px" }}>
        <Row>
            <Col lg={5}>
            <Card.Img variant="top" src="/images/tablets-mobile.png" />
            </Col>
            <Col lg={7}>
                <Card.Body>
                <Card.Title>Product 1 Samsun</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                
            </Col>
        </Row>
      
    </Card>
    </>
    
  );
};

export default ProductForListComponent;
