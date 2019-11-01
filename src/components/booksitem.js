import React from "react";
import { Card, Button } from "react-bootstrap";
import {Link} from'react-router-dom';
import {connect} from 'react-redux'
import { deletemanga } from "../action/action";

const BookItem = ({manga, removemanga}) => {
  return (
    <div>
      <Card bordedr="warning " style={{ width: "20rem" }}>
        <Card.Img variant="top" src={manga.img} />
        <Card.Body>
          <Card.Title>{manga.Title}</Card.Title>
          <Card.Text>
            {manga.Price}
          </Card.Text>
          <Link to={`/edit/${manga.id}`}><Button variant="secondary">Edit</Button></Link>
          <Button onClick={()=> removemanga(manga.id)}  variant="danger">Delete</Button>  
         
        </Card.Body>
      </Card>
    </div>
  );
};


const mapDispatchToProps = dispatch =>{
  return{
    removemanga: id =>dispatch(deletemanga(id))
  }
}
export default connect( null,mapDispatchToProps)(BookItem);
