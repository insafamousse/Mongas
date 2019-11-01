import React from "react";
import BookItem from "./booksitem";
import "../App.css";
import { connect } from "react-redux";

const BookList = ({ mangas }) => {
  return (
    <div className="mangas">
      {mangas.map((manga, index) => (
        <BookItem manga={manga} key={index} />
      ))}
       
    </div>
  )
}

const mapStateToProps = state => {
  return {
     mangas: state.mangaReducers
    }
}

export default connect(mapStateToProps)(BookList);
