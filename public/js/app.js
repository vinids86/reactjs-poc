var React = require('react');
var Navbar = require('react-bootstrap').Navbar;
var Alert = require('react-bootstrap').Alert;
var Input = require('react-bootstrap').Input;
var Button = require('react-bootstrap').Button;
var ButtonInput = require('react-bootstrap').ButtonInput;

var AlertManyChanges = React.createClass({
	getInitialState: function() {
		return {
			alertVisible: true
		};
	},

	render: function() {
		if(this.state.alertVisible) {
		return (
			<Alert bsStyle='warning' onDismiss={this.handleAlertDismiss}>
	          <h4>Meça suas alterações parça!</h4>
	          <p>Exemplo de alert warning.</p>
	          <p>
	            <Button bsStyle='warning'>Take this action</Button>
	            <span> or </span>
	            <Button onClick={this.handleAlertDismiss}>Hide Alert</Button>
	          </p>
	        </Alert>
		);
		}
		return (
			<Button onClick={this.handleAlertShow}>Show Alert</Button>
			);
	},

	handleAlertDismiss() {
		this.setState({alertVisible: false});
	},

	handleAlertShow() {
		this.setState({alertVisible: true});
	}

});

var Form = React.createClass({
	
	render: function() {
		const inputTypeInstance = (
		  <form className='form-horizontal'>
		    <Input bsStyle='success' type='text' label='Nome' labelClassName='col-xs-2' wrapperClassName='col-xs-10' />
		    <Input bsStyle='warning' type='text' label='Endereço' labelClassName='col-xs-2' wrapperClassName='col-xs-10' />
		    <Input bsStyle='error' type='text' label='Outro campo' labelClassName='col-xs-2' wrapperClassName='col-xs-10' />
		    <Input type='textarea' label='Textarea' labelClassName='col-xs-2' wrapperClassName='col-xs-10' />
		    <Input label="Sexo" labelClassName="col-sm-2" wrapperClassName="col-sm-10">
			    <Input name="sexo" type="radio" ref="Masculino" value="masculino" label="Masculino" groupClassName="col-sm-2" />
			    <Input name="sexo" type="radio" ref="Feminino" value="feminino" label="Feminino" groupClassName="col-sm-2" />
			</Input>
		  </form>
		);
		return (
			inputTypeInstance
		);
	}

});

var App = React.createClass({

	render: function() {
		return (
			<div>
				<Navbar brand='SACA-NAGEM' toggleNavKey={0}></Navbar>
				<AlertManyChanges />
				<Form />
			</div>
		);
	}

});

React.render(<App />, document.getElementById("container"));