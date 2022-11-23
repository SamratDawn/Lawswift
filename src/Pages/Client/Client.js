import React, { useEffect, useState } from "react";
import ClientHeader from "./ClientHeader";
import ClientBody from "./ClientBody";

const Client = props => {
    const clientName=props.name;
    const clientEmail=props.email;
  const [lawyers, setLawyers] = useState([]);
  var allLawyers = [];
  const f = async () => {
    const response = await fetch(
      "https://swe5-528a4-default-rtdb.firebaseio.com/lawyer.json"
    );
    const data = await response.json();
    setLawyers(data);
  };

  useEffect(() => {
    f();
  }, []);

  for (const lawyer in lawyers) {
    const obj = {
      id: lawyer,
      data: lawyers[lawyer]
    };
    allLawyers = [...allLawyers, obj];
  }

  console.log(lawyers);

  return (
    <React.Fragment>
      <ClientHeader />
      {allLawyers.map((lawyer) => (
        <ClientBody
          id={lawyer.id}
          name={lawyer.data.name}
          fees={lawyer.data.fees}
          domain={lawyer.data.domain}
          clientName={clientName}
          clientEmail={clientEmail}
          lawyers={lawyers}
        />
      ))}
    </React.Fragment>
  );
};
export default Client;
