import React from 'react';

function CheckWaterBoiling(props) {
	console.log("is the water boiling");
	if (props.temperature >= 100) 
		return <p>The water is boiling</p>
	else
		return <p>The water is NOT boiling</p>
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert (temperature, convert) {
	const input = parseFloat(temperature);
	if(Number.isNaN(input))
		return "";
	const output = convert(input);
	const rounded = Math.round(output * 1000)/1000;
	return rounded.toString();
}

const scaleNames = {
	c: 'Celsius',
	f: 'Fahrenheit',
}

class TemperatureInput extends React.Component {

	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);

		this.state={
			temperature: '',
		}
	}

	handleChange(event) {
		this.props.onTemperatureChange(event.target.value);
	}

	render() {
		return(
			<React.Fragment>
				<fieldset>
					<p>
						<legend>
							Enter temperature in {scaleNames[this.props.scale]}:
						</legend>
						<input
						type="number"
						value={this.props.temperature}
						onChange={this.handleChange}
						/>
					</p>
				</fieldset>
			</React.Fragment>
		)
	}
}

class Calculator extends React.Component {

	constructor(props) {
		super(props);

		this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);

		this.state={
			temperature: '',
			scale: 'c'
		}
	}

	handleCelsiusChange(temperature) {
		this.setState ({
			scale: 'c',
			temperature: temperature,
		})
	}

	handleFahrenheitChange(temperature) {
		this.setState ({
			scale: 'f',
			temperature: temperature,
		})
	}

	render() {

		const { scale, temperature } = this.state;
		const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
		const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature

		return(
			<div>
				<TemperatureInput 
					scale="c"
					temperature={celsius}
					onTemperatureChange={this.handleCelsiusChange}
					/>
				<TemperatureInput 
					scale="f"
					temperature={fahrenheit}
					onTemperatureChange={this.handleFahrenheitChange}
				/>
				<CheckWaterBoiling
					temperature={this.state.temperature}
				/>
			</div>
		)
	}
}


export default Calculator;