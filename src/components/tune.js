import React from 'react'

class Tune extends React.Component {
	render() {
		return(
			<option value={this.props.name}>
				{this.props.name}
			</option>
		);
	}
}

export default Tune
