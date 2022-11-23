import React from "react";
import Button from "react-bootstrap/Button";
import Card1 from "react-bootstrap/Card";

function ClientBody(props) {
  const lawyers = props.lawyers;
  
  const fn1 = async (lawyers) => {
    const response = await fetch(
      "https://swe5-528a4-default-rtdb.firebaseio.com/lawyer.json",
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lawyers),
      }
    );
  };
  const bookingHandler = () => {
    lawyers[props.id].cases.push({
      name: props.clientName,
      email: props.clientEmail,
    });
    fn1(lawyers);
  };
  return (
    <Card1 style={{ margin: "20px 800px 20px 800px" }}>
      <Card1.Body>
        <Card1.Title style={{ color: "black" }}>{props.name}</Card1.Title>
        <Card1.Text style={{ color: "black" }}>
          <p style={{ color: "black" }}>Fees- {props.fees}</p>
          <p style={{ color: "black" }}>Domain- {props.domain}</p>
        </Card1.Text>
        <Button variant="primary" onClick={bookingHandler}>
          Book
        </Button>
      </Card1.Body>
    </Card1>
  );
}
export default ClientBody;
