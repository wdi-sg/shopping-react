import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class Chart extends Component {

	constructor(props) {
		super(props);
		this.state = {
			chartData: props.chartData
		}
	}

	// static defaultProps = {
	// 	displayTitle: true,
	// 	displayLegend: true,
	// 	legendPosition: ''
	// }

	render() {
		return(
			<div className="chart">
				<Bar
					data={this.state.chartData}
					width={100}
					height={50}
					options={{
						title:{
							display:true,
							text:"Largest Cities in US",
							fontSize: 25
						},
						legend: {
							display: true,
							position: 'right'
						}
					}}
				/>
			</div>
		)
	}
}

export default Chart;