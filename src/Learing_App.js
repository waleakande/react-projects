import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
	constructor(){
		super(); // this gets the context
		this.state = {val: 0}
		this.update = this.update.bind(this);
	}
	// this a method used to update the state
	update(){
		this.setState({val: this.state.val + 1}) // increments the value of state
	}
	// mounting lifecycle phases
	componentWillMount(){
		console.log('componentWillMount');
	}
	render(){
		return <button onClick={this.update}>{this.state.val}</button>
			
	}

	componentDidMount() {
		console.log('componentDidMount');
	}

	componentWillUnount() {
		console.log('componentWillUnmount');
	}
}

// new conmponent
class Wrapper extends React.Component() {
	// Method
	mount(){
		ReactDOM.render(<App />, document.getElementById('a'))
	}
	unmount() {
		ReactDOM.unmountComponentAtNode(document.getElementById('a'))
	}
	render() {
		return (
			<div>
				<button onClick={this.mount.bind(this)}>Mount</button>
				<button onClick={this.unmount.bind(this)}>UnMount</button>
				<div id="a"></div>
			</div>
		)
	}
} 

export default Wrapper