import React, { Component } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addmanga } from "../action/action";
import uuid from "uuid";

class Add extends Component {
  state = { id: uuid() };
  
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  
  brandNew = () => {
    this.props.addmangas(this.state);
    this.props.history.push("/");
  };

  render() {
    return (
      <Form>
        <h1>Add New Manga !</h1>
        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Manga Title
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Title..."
              name="Title"
              onChange={this.handleChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Price
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Price..."
              name="Price"
              onChange={this.handleChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Manga Cover
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Img Url..."
              name="img"
              onChange={this.handleChange}
            />
          </Col>
        </Form.Group>
        <Button onClick={this.brandNew} variant="danger">
          Add
        </Button>
        <Link to="/">
          <Button variant="primary">Cancel</Button>
        </Link>
      </Form>
    );
  }
}

const mapDispatchtoToProps = dispatch => {
  return {
    addmangas: newManga => dispatch(addmanga(newManga))
  };
};

export default connect(
  null,
  mapDispatchtoToProps
)(Add);
