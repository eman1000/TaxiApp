import { connect } from "react-redux";
import Home from "../components/Home";
import {
	getCurrentLocation,
	getInputData,
	toggleSearchResultModal,
	getAddressPredictions
} from "../modules/home";

const mapStateToProps = (state) => ({
	region: state.home.region,
	inputData:state.home.inputData || {},
	resultTypes:state.home.resultTypes || {},
	predictions:state.home.predictions ||  []

});

const mapActionCreators = {
	getCurrentLocation,
	getInputData,
	toggleSearchResultModal,
	getAddressPredictions
};
export default connect(mapStateToProps, mapActionCreators)(Home);