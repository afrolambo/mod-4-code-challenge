import React from "react";

class Form extends React.Component {  

	state={
		title: "",
		author: "", 
		img: ""
	}

	changeHandler = (e) => {
		this.setState({[e.target.name]: e.target.value})
		console.log(this.state)
	}

	handleSubmit = (e) => {
		e.preventDefault() 
		this.props.submitHandler(this.state)
	}


  render() {
	
    return (
      <div>
    	<h3>Add a new book!</h3>
    	<form onSubmit={this.handleSubmit} >
		  	<input onChange={this.changeHandler} value={this.state.title} type="text" name="title" placeholder="title" />
		  	<input onChange={this.changeHandler} value={this.state.author} type="text" name="author" placeholder="author" />
		  	<input onChange={this.changeHandler} value={this.state.img} type="text" name="img" placeholder="img" />
	  	<input type="submit" />
	  </form>
      </div>
    );
  }
}

export default Form;
