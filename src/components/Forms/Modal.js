import React, { Component } from 'react';
import { Form, Message, Container,Modal, Row, Input, Label, Col, Button } from "react-bulma-components/full"
import axios from 'axios'


class LoginModal extends React.Component {
  state = {
    show: false,
    fullname: '',
    phonenumber: '',
    email: '',
    message: ''
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }


  toggleModal = () => {
    this.setState({
      show: !this.state.show
    });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    axios.post('http://127.0.0.1:8000/api/joinus')
  }


  render(){
    return (
        <div>
            <a className="button LoginBtnMain nav-item has-background-danger is-danger has-text-white is-inverted  has-text-weight-bold modal-button"  data-target="#modal"
             onClick={this.handleShow}>
              Contact Us
            </a>

            <Modal className="container has-background-danger" show={this.state.show} handleClose={this.handleClose}>
                <div className={`modal ${this.state.show ? 'is-active' : ''}`} id="#modal">
                  <div className="modal-background"></div>
                  <div className="modal-card">
                    <header className="modal-card-head has-background-danger">
                      <p className="modal-card-title has-text-white">Contact Data For Her Team</p>
                      <button className="delete" aria-label="close" onClick={this.handleClose}></button>
                    </header>
                    <section className="modal-card-body has-background-white-ter">
                       <form onSubmit={this.handleSubmit}>
                          <div className="field">
                            <div className="control has-icons-left">
                            <input className="input is-medium" type="text" name="fullname" placeholder="Fullname"  value={this.state.fullname} onChange={this.handleChange} />
                            <span className="icon is-small is-left">
                              <i className="fas fa-user"></i>
                            </span>
                            </div>
                          </div>
                          <div className="field">
                            <div className="control has-icons-left">
                            <input className="input is-medium" type="text" name="phonenumber" placeholder="Phonenumber"  value={this.state.phonenumber} onChange={this.handleChange} />
                            <span className="icon is-small is-left">
                              <i className="fas fa-phone"></i>
                            </span>
                            </div>
                          </div>
                          <div className="field">
                            <div className="control has-icons-left has-icons-right">
                              <input className="input is-danger is-medium" type="email" name="email" placeholder="Email"  value={this.state.email} onChange={this.handleChange}  />
                              <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                              </span>
                            </div>
                          </div>
                          <div className="field">
                            <div className="control">
                              <textarea className="textarea is-medium" placeholder="Message / Inquiry" name="message" value={this.state.message} onChange={this.handleChange} ></textarea>
                            </div>
                          </div>
                       </form>
                    </section>
                    <footer className="modal-card-foot has-background-white-ter">
                      <button className="button is-danger has-text-weight-bold is-fullwidth is-uppercase is-medium" type="submit" value="Submit">Submit</button>
                      <button className="button is-medium is-fullwidth is-info is-outlined" onClick={this.handleClose}>Cancel</button>
                    </footer>
                  </div>
                </div>
            </Modal>
        </div>
    )
  }
}


export default LoginModal;
