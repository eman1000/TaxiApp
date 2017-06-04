import { connect } from "react-redux";
import Home from "../components/Home";
import {
	getCurrentLocation,
	getInputData,
	toggleSearchResultModal,
	getAddressPredictions,
	getSelectedAddress,
	bookCar
} from "../modules/home";

const mapStateToProps = (state) => ({
	region: state.home.region,
	inputData:state.home.inputData || {},
	resultTypes:state.home.resultTypes || {},
	predictions:state.home.predictions ||  [],
	selectedAddress:state.home.selectedAddress || {},
	fare:state.home.fare,
	booking:state.home.booking || {}

});

const mapActionCreators = {
	getCurrentLocation,
	getInputData,
	toggleSearchResultModal,
	getAddressPredictions,
	getSelectedAddress,
	bookCar
};
export default connect(mapStateToProps, mapActionCreators)(Home);