import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  let book = props.bookshelf.map(bookObj => <Book key={bookObj.id} book={bookObj} clickHandler={props.clickHandler}/>)
  

  return (
    <div>
      <h1>Book Shelf</h1>
      {book}
    </div>
  );
};

export default Bookshelf;
