import React from "react";

const Book = props => {

  

  return (
    <div onClick={() => props.clickHandler(props.book)} className="book-card">
      <h2>{props.book.title}</h2>
      <p>{props.book.author}</p>
      <img alt={props.book.name} src={props.book.img} /> 
      <button onClick={() => props.deleteHandler(props.book)}>Delete Book</button>
    </div>
  );
};

export default Book;


// 