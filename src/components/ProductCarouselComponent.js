import { Carousel } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const ProductCarouselComponent = () => {
  const cursorP = {
    cursor: "pointer",
  };

  return (
    <Carousel>
      <Carousel.Item>
        <img
          crossOrigin="anonymous"
          className="d-block w-100"
          style={{ height: "400px", objectFit: "cover" }}
          src="/images/carousel/home-slider-1.png"
          alt="First slide"
        />
        <Carousel.Caption style={{ color: "black" }}>
          <LinkContainer style={cursorP} to="/product-details">
            <h4>Bestseller in Mobile category</h4>
          </LinkContainer>
          <p>Samsung mobile 38000TK discount</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "400px", objectFit: "cover" }}
          src="/images/carousel/home-slider-2.png"
          alt="Second slide"
        />

        <Carousel.Caption style={{ color: "black" }}>
          <LinkContainer style={cursorP} to="/product-details">
            <h4>Bestseller in Mobile category</h4>
          </LinkContainer>
          <p>
            Flash Sale 58%
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "400px", objectFit: "cover" }}
          src="/images/carousel/home-slider-3.png"
          alt="Third slide"
        />

        <Carousel.Caption style={{ color: "black" }}>
          <LinkContainer style={cursorP} to="/product-details">
            <h4>Bestseller in Mobile category</h4>
          </LinkContainer>
          <p>
            New year Blast Offer
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarouselComponent;
