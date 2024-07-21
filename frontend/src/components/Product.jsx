/* eslint-disable react/prop-types */
import { Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Rating from "./Rating";

function Product({ product }) {
  return (
    <Card
      className="my-3 p-3 rounded"
      style={{ cursor: "pointer", height: "400px" }}
    >
      <LinkContainer to={`/product/${product._id}`} style={{ height: "190px" }}>
        <Card.Img src={product.image} variant="top" />
      </LinkContainer>
      <Card.Body>
        <LinkContainer to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </LinkContainer>
        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
