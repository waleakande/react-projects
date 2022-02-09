import React from "react";

// Class component: can show state
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			txt: 'this is the default state text...'
		}
	}
	update( e ){
		this.setState({txt: e.target.value})
	}
	render() {
		return (
			<div>
				<h1>{this.state.txt}</h1>
				<Widget update={this.update.bind(this)} />
				<Button>Submit</Button>
			</div>
		)
	}
}

// Component function
const Widget = (props) => 
	<input type="text" onChange={props.update} />

const Button = (props) =>
	<button>{props.children}</button>

export default App;