import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = { 
	books: [], 
	bookshelf: []
  }

  componentDidMount() {
	  fetch("http://localhost:3005/books")
	  .then(resp => resp.json())
	  .then(books => {
		  this.setState({
			  books: books
		  })
	  })
  }

  addClickHandler = (bookObj) => {
	let bookShelf = [...this.state.bookshelf, bookObj]
	this.setState({
		bookshelf: bookShelf
	})
  }

  removeClickHandler = (bookObj) => {
	let newArray = this.state.bookshelf.filter(book => book.id !== bookObj.id)
	this.setState({
		bookshelf: newArray
	})
  }
 
  submitHandler = (bookObj) => {
	  this.setState({
		  books: [...this.state.books,bookObj ]
	  }) 
	  this.postBook(bookObj)

  }

  postBook = (bookObj) => {
	  fetch("http://localhost:3005/books", {
		  method: 'POST', 
		  headers: {
			  'content-type': 'application/json', 
		  }, 
		  body: JSON.stringify(bookObj)
	  }).then(resp => resp.json())
  }

  deleteHandler = (bookObj) => {
	let newArray = this.state.books.filter(book => book.id !== bookObj.id)
	this.setState({
		books: newArray
	})
	this.deleteBooks(bookObj)
  }

  deleteBooks = (bookObj) => {
	  fetch(`http://localhost:3005/books/${bookObj.id}`, {
		  method: 'DELETE'
	  })
  }

  render() {


    return (
    	<main>
    	  <h1>Angeloz Bookz</h1>
	      <div className="book-container">
	        <BookList books={this.state.books} clickHandler={this.addClickHandler} submitHandler={this.submitHandler} deleteHandler={this.deleteHandler} />
	        <Bookshelf bookshelf={this.state.bookshelf} clickHandler={this.removeClickHandler} />
	      </div>
	    </main>
    );
  }
}

export default App;
