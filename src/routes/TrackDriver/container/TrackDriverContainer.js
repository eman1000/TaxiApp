import { connect } from "react-redux";
import TrackDriver from "../components/TrackDriver";
import {
	getCurrentLocation,
	getDriverInfo,
	getDriverLocation,
	getDistanceFromDriver
} from "../module/trackDriver";

const mapStateToProps = (state) => ({
	region: state.trackDriver.region,
	selectedAddress:state.home.selectedAddress || {},
	driverInfo:state.trackDriver.driverInfo || {},
	driverLocation:state.trackDriver.driverLocation,
	showDriverFound:state.trackDriver.showDriverFound,
	showCarMaker:state.trackDriver.showCarMaker,
	distanceFromDriver:state.trackDriver.distanceFromDriver || {}

});

const mapActionCreators = {
	getCurrentLocation,
	getDriverInfo,
	getDriverLocation,
	getDistanceFromDriver
};
export default connect(mapStateToProps, mapActionCreators)(TrackDriver);