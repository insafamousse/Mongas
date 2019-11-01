import React, { Component } from "react";
import { Form, Col, Row,Button } from "react-bootstrap";
import {Link} from'react-router-dom';
import {connect} from 'react-redux';
import {editmanga} from '../action/action'


class Edit extends Component {
  state ={ }
  
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  update = () => {
    this.props.updatemanga(this.state)
    this.props.history.push("/")
  }

  render() {
    return (
      <Form>
        <h1>Manga Edit :</h1>
        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Manga Title
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Title..."
              name="Title"
              value={this.state.Title}
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
              value={this.state.Price}
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
              value={this.state.img}
              onChange={this.handleChange}
            />
          </Col>
        </Form.Group>
       <Button onClick={this.update} variant="danger">Edit</Button>
        <Link to="/"><Button variant="primary">Cancel</Button></Link>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch =>{
  return{
 updatemanga: editedmanga =>dispatch(editmanga(editedmanga))
  }
}
const mapStateToProps = state =>{
  return{
    mangas: state.mangaReducers
  }
} 
export default connect(mapStateToProps,mapDispatchToProps)(Edit);
