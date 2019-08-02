import React, { Component } from 'react'
import { Button, Columns, Navbar, Header} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'

function Nav() {

  return (
      <div className="container topNav">
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a class="navbar-item is-uppercase is-size-5">
                  <strong>NEXTGRAM</strong>
                </a>

                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-end has-text-weight-bold">
              <a class="navbar-item is-uppercase is-size-5">
                <strong>Home</strong>
              </a>
              <a class="navbar-item is-uppercase is-size-5">
                <strong>Profile</strong>
              </a>
            </div>

            <div className="navbar-end">
              <div className="navbar-item has-text-weight-bold">
                <div className="buttons">
                  <a class="button is-primary">
                    <strong>Sign up</strong>
                  </a>
                  <a class="button is-primary is-uppercase">
                    <strong>Log in</strong>
                  </a>
                </div>
              </div>
            </div>
            </div>
          </nav>
      </div>
  );
}

export default Nav;
