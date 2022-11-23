import LawyerHeader from "./LawyerHeader";
import LawyerBody from "./LawyerBody";
import React from "react";

const Lawyer = (props) => {
  if (props.lawyers === null) {
    return <LawyerHeader name={props.name} />;
  }
  var info = props.lawyers[props.id];
  var cases = info.cases;
  return (
    <React.Fragment>
      <LawyerHeader name={props.name} />
      {cases.map((case1) => (
        <LawyerBody case1={case1} />
      ))}
    </React.Fragment>
  );
};

export default Lawyer;
