import React, { Component } from 'react';
import { Button, Columns, Navbar, Header} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'

function Footer() {

  return (

    <>
        <footer className="btmFooter has-background-primary">
            <div className="container content has-text-centered">
                <div className="columns">
                  <div className="column is-half">
                    <div className="firstFooter">
                        <div className="content has-text-centered">
                          <p className="btmtitle is-size-6 has-text-white has-text-centered">
                             Bulletin Board designed by Abelsen
                          </p>
                        </div>
                    </div>
                  </div>
                  <div className="column is-half">
                    <div className="firstFooter">
                        <div className="content">
                          <p className="subtitle is-5 has-text-white has-text-weight-light">
                            <div className="has-text-weight-light">
                                <div className="has-text-centered">
                                    <p className="btmtitle has-text-white has-text-centered is-size-6">Copyright © 2019 Data For Her. Privacy Policy</p>
                                </div>
                            </div>
                          </p>
                        </div>
                     </div>
                  </div>
                </div>
            </div>
        </footer>
    </>

  );
}

export default Footer;
