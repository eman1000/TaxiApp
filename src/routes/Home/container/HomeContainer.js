import { connect } from "react-redux";
import Home from "../components/Home";
import {
	getCurrentLocation,
	getInputData,
	toggleSearchResultModal,
	getAddressPredictions,
	getSelectedAddress,
	bookCar,
	getNearByDrivers
} from "../module/home";

const mapStateToProps = (state) => ({
	region: state.home.region,
	inputData:state.home.inputData || {},
	resultTypes:state.home.resultTypes || {},
	predictions:state.home.predictions ||  [],
	selectedAddress:state.home.selectedAddress || {},
	fare:state.home.fare,
	booking:state.home.booking || {},
	nearByDrivers:state.home.nearByDrivers || []

});

const mapActionCreators = {
	getCurrentLocation,
	getInputData,
	toggleSearchResultModal,
	getAddressPredictions,
	getSelectedAddress,
	bookCar,
	getNearByDrivers
};
export default connect(mapStateToProps, mapActionCreators)(Home);