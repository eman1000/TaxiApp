import { combineReducers } from "redux";
import { HomeReducer as home } from "../routes/Home/module/home";
import { TrackDriverReducer as trackDriver } from "../routes/TrackDriver/module/trackDriver";

export const makeRootReducer = () => {
	return combineReducers({
		home,
		trackDriver
	});
}

export default makeRootReducer;