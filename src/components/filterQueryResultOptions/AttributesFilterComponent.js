import { Form } from "react-bootstrap";

const AttributesFilterComponent = () => {
  return (
    <>
    {[{ color:["red","blue","green"]}, {ram:["1 TB","2 TB","3 TB"]} ].map(
        (item, idx) => (
            <div key={idx} className="md-3">
            <Form.Label>
                {Object.keys(item)}
            </Form.Label>
            {item[Object.keys(item)].map((i,idx) => (
                <Form.Check key={idx}
                type="checkbox"
                label={i}
            />
            ))}
            
            </div>
        )
    )}
    </>
  );
};

export default AttributesFilterComponent;
