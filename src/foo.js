class HelloMessage extends React.Component {
	render() {
		let x = 'a';
		return <div>{this.props.name}</div>;
	}
}

React.render(
	<HelloMessage name="hello from react 6to5" />,
	document.getElementById('foo')
);
