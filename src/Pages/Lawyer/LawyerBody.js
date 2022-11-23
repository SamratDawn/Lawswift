import React from "react";
import Card1 from "react-bootstrap/Card";

const LawyerBody=(props)=> {
    console.log(props.case1.email)
    if (props.case1.email===undefined)
        return (<Card1 style={{ margin: "20px 800px 20px 800px" }}>
        <Card1.Body>           
          <Card1.Title style={{ color: "black" }}>Here are your bookings{props.case1.name}</Card1.Title>
        </Card1.Body>
      </Card1>);
    return (
        <Card1 style={{ margin: "20px 800px 20px 800px" }}>
          <Card1.Body>           
            <Card1.Title style={{ color: "black" }}>You have been booked by- {props.case1.name}</Card1.Title>
            <Card1.Title style={{ color: "black" }}>You can reach them at their email ID- {props.case1.email}</Card1.Title>
          </Card1.Body>
        </Card1>
      );
}

export default LawyerBody;