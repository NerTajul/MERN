import { Row, Col, Container, ListGroup, Button } from "react-bootstrap";


import PaginationComponent from "../components/PaginationComponent";
import ProductForListComponent from "../components/ProductForListComponent";
import SortOptionsComponent from "../components/SortOptionsComponent";

import AttributesFilterComponent from "../components/filterQueryResultOptions/AttributesFilterComponent";
import PriceFilterComponent from "../components/filterQueryResultOptions/PriceFilterComponent";
import RatingFilterComponent from "../components/filterQueryResultOptions/RatingFilterComponent";
import CategoryFilterComponent from "../components/filterQueryResultOptions/CategoryFilterComponent";




const ProductListPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item><SortOptionsComponent /> </ListGroup.Item>
            <ListGroup.Item><PriceFilterComponent /> </ListGroup.Item>
            <ListGroup.Item><RatingFilterComponent /></ListGroup.Item>
            <ListGroup.Item><CategoryFilterComponent /></ListGroup.Item>
            <ListGroup.Item><AttributesFilterComponent /></ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={9}>
          {/* <ProductForListComponent />
          <PaginationComponent /> */}
        </Col>
      </Row>
    </Container>
  );
};

export default ProductListPage;
