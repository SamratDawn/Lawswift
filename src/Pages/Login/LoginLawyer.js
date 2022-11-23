import "./LoginLawyer.css";
import React, { useState } from "react";
import Card from "../../UI/Card";
import { NavLink } from "react-router-dom";
import Lawyer from "../Lawyer/Lawyer";

let name = "";
let id='';
let lawyers=[];

const LoginLawyer = () => {
  const [isVal, setIsVal] = useState(null);
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  const emailFn = (e) => {
    setEmail(e.target.value);
  };

  const passFn = (e) => {
    setPass(e.target.value);
  };

  if (isVal) {
    return <Lawyer name={name} id={id} lawyers={lawyers}/>;
  }

  async function submitHandler(e) {
    e.preventDefault();
    const response = await fetch(
      "https://swe5-528a4-default-rtdb.firebaseio.com/lawyer.json"
    );
    const data = await response.json();
    for (const user in data) {
      if (data[user].email == email && data[user].password == pass) {
        id = user;
        name = data[user].name;
        lawyers=data;
        setIsVal(true);
      }
    }
    if (isVal===null) setIsVal(false);
  }

  return (
    <Card className="crd3">
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            value={email}
            onChange={emailFn}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            value={pass}
            onChange={passFn}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Log In
        </button>
        <NavLink extend to="/">
          <button className="btn btn-primary">Cancel</button>
        </NavLink>
        <NavLink extend to="/signlawyer">
          <button className="btn btn-primary">Sign Up</button>
        </NavLink>
        {isVal == false && <p style={{ color: "red" }}>User Not Found</p>}
      </form>
    </Card>
  );
};

export default LoginLawyer;
