import React, { Component, PropTypes } from "react";
import { Router } from "react-native-router-flux";

import scenes from "../routes/scenes";

import { Provider } from "react-redux";

export default class AppContainer extends Component {
	static propTypes = {
		store: PropTypes.object.isRequired
	}
	render(){
		return (

			<Provider store={this.props.store}>
				<Router scenes={scenes} />

			</Provider>

			);
	}
}
