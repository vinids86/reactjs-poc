var React = require('react');
var Navbar = require('react-bootstrap').Navbar;
var Alert = require('react-bootstrap').Alert;
var Input = require('react-bootstrap').Input;
var ButtonInput = require('react-bootstrap').ButtonInput;

var Form = React.createClass({
	
	render: function() {
		const inputTypeInstance = (
		  <form>
		    <Input type='text' label='Text' placeholder='Enter text' />
		    <Input type='email' label='Email Address' placeholder='Enter email' />
		    <Input type='password' label='Password' />
		    <Input type='file' label='File' help='[Optional] Block level help text' />
		    <Input type='checkbox' label='Checkbox' checked readOnly />
		    <Input type='radio' label='Radio' checked readOnly />
		    <Input type='select' label='Select' placeholder='select'>
		      <option value='select'>select</option>
		      <option value='other'>...</option>
		    </Input>
		    <Input type='select' label='Multiple Select' multiple>
		      <option value='select'>select (multiple)</option>
		      <option value='other'>...</option>
		    </Input>
		    <Input type='textarea' label='Text Area' placeholder='textarea' />
		    <ButtonInput value='Button Input' />
		    <ButtonInput type='reset' value='Reset Button' />
		    <ButtonInput type='submit' value='Submit Button' />
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
				<Alert bsStyle='warning'>
					<strong>Meça suas alterações parça!</strong> Exemplo de alert warning.
				</Alert>
				<Form />
			</div>
		);
	}

});

React.render(<App />, document.getElementById("container"));