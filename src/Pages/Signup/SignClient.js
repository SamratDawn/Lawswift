import { useState } from "react";
import { NavLink } from "react-router-dom";
import Card from "../../UI/Card";
import Client from "../Client/Client";
import "./SignClient.css";

const SignClient = () => {
  const [name, changeName] = useState();
  const [age, changeAge] = useState();
  const [nation, changeNation] = useState();
  const [email, changeEmail] = useState();
  const [password, changePassword] = useState();
  const [isValid, setIsValid] = useState(null);

  if (isValid) {
    return <Client name={name} email={email} />;
  }

  const nameFn = (e) => {
    changeName(e.target.value);
  };

  const ageFn = (e) => {
    changeAge(e.target.value);
  };

  const nationFn = (e) => {
    changeNation(e.target.value);
  };

  const emailFn = (e) => {
    changeEmail(e.target.value);
  };

  const passwordFn = (e) => {
    changePassword(e.target.value);
  };

  async function f(obj) {
    const response = await fetch(
      "https://swe5-528a4-default-rtdb.firebaseio.com/client.json",
      {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "content-type": "application/json",
        },
      }
    );
    setIsValid(true);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      name != null &&
      age != null &&
      nation != null &&
      email.includes("@") &&
      password.length > 8
    ) {
      const obj = {
        name: name,
        age: age,
        nation: nation,
        email: email,
        password: password,
      };
      f(obj);
      changeName("");
      changeAge("");
      changeNation("");
      changeEmail("");
      changePassword("");
    } else setIsValid(false);
  };

  return (
    <Card className="crd2">
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            value={name}
            onChange={nameFn}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Age
          </label>
          <input
            value={age}
            onChange={ageFn}
            type="number"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Nationality
          </label>
          <input
            value={nation}
            onChange={nationFn}
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Email
          </label>
          <input
            value={email}
            onChange={emailFn}
            type="email"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            value={password}
            onChange={passwordFn}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Account
        </button>
        <NavLink extend to="/">
          <button className="btn btn-primary">Cancel</button>
        </NavLink>
        {isValid == false && (
          <p style={{ color: "red" }}>Invalid field inputs</p>
        )}
      </form>
    </Card>
  );
};

export default SignClient;
