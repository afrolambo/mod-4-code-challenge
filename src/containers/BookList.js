import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  book = () => {
    return this.props.books.map(bookObj => <Book key={bookObj.id} book={bookObj} clickHandler={this.props.clickHandler} deleteHandler={this.props.deleteHandler} />)
  } 

  render() {

    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form submitHandler={this.props.submitHandler} />
        {this.book()}
      </div>
    );
  }
}

export default BookList;
