import { Form } from "react-bootstrap";

const PriceFilterComponent = () => {
  return (
    <>
      <Form.Label>
        <span className="fw-bold">Price no greater than:</span> 500&#2547;
      </Form.Label>
      <Form.Range min={10} max={100} step={10} />
    </>
  );
};

export default PriceFilterComponent;
