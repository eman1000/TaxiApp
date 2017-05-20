import React from "react";
import { View } from "native-base";
import MapView from "react-native-maps";

import SearchBox from "../SearchBox";

import styles from "./MapContainerStyles.js";

export const MapContainer = ({region})=>{

	return(
		<View style={styles.container}>
			<MapView
				provider={MapView.PROVIDER_GOOGLE}
				style={styles.map}
				region={region}
			>
				<MapView.Marker
					coordinate={region}
					pinColor="green"

				/>
			</MapView>
			<SearchBox/>
		</View>
	)
}

export default MapContainer;