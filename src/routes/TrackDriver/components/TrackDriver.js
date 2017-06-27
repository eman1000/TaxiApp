import React from "react";
import {View, Text} from "react-native";

import { Container }  from "native-base";
import HeaderComponent from "../../../components/HeaderComponent";
import MapTrack from "./MapTrack";
import DriverFound from "./DriverFound";
import DriverFooterProfile from "./DriverFooterProfile";
import DriverOnTheWayFooter from "./DriverOnTheWayFooter";
const carMarker = require("../../../assets/img/carMarker.png");
class TrackDriver extends React.Component{

	componentDidMount() {
		this.props.getCurrentLocation();
		this.props.getDriverInfo();
	}
	componentWillReceiveProps(nextProps) {
		if(this.props.driverLocation && nextProps.driverLocation !== this.props.driverLocation){
			this.props.getDistanceFromDriver();
		}
	}

	render(){
		const region = {
			latitude:3.146642,
			longitude:101.695845,
			latitudeDelta:0.0922,
			longitudeDelta:0.0421
		}
		return(
			<Container>
				<View style={{flex:1}}>
					<HeaderComponent />
					{
						this.props.region &&
						<MapTrack
							region={this.props.region}
							selectedAddress={this.props.selectedAddress}
							driverLocation={this.props.driverLocation}
							showCarMaker={this.props.showCarMaker}
							carMarker={carMarker}

						/>

					}

					{
						this.props.distanceFromDriver.rows &&
					
						<DriverOnTheWayFooter
							driverInfo={this.props.driverInfo}
							distanceFromDriver={this.props.distanceFromDriver}

						/>
					}
					<DriverFooterProfile
						driverInfo={this.props.driverInfo}
					/>

					{
						this.props.showDriverFound &&
						<DriverFound
							driverInfo={this.props.driverInfo}
							getDriverLocation={this.props.getDriverLocation}
						/>
					}
				
				</View>
			</Container>

		);

	}
}

export default TrackDriver;