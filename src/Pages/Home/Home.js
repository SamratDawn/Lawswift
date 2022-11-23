import React from "react";
import emb from "../../Assets/Emblem.png";
import law0 from "../../Assets/Law0";
import Slide from '../../Components/Slide'

import { NavLink } from "react-router-dom";
import Card from "../../UI/Card";
import "./Home.css";

const Home = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="navbar-brand" href="#">
            <img src={emb} />
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <NavLink exact to="/loginclient">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Client Portal
                  </a>
                </li>
              </NavLink>

              <NavLink exact to="/loginlawyer">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Lawyer Portal
                  </a>
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>

      <div className="main">
        <Card className="crd">
          {/* <Slide /> */}
          <img src={law0} className="poster" />

          <p>
            <br />
            Lawswift is a web service that aims at bringing clients <br />
            and lawyers together virtually. It lets users go through <br />
            various legal representative options in accordance to their <br />
            case requirement and make the best choice with respect <br />
            to their legal requirements.
          </p>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default Home;
