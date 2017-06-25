import React from "react";
import { View } from "native-base";
import MapView from "react-native-maps";

import styles from "./MapTrackStyles.js";

export const MapTrack = ({ 
		region,
		driverLocation,
		showCarMaker,
		selectedAddress,
		carMarker
	})=>{

	const { selectedPickUp, selectedDropOff } = selectedAddress || {};

	return(
		<View style={styles.container}>
			<MapView
				provider={MapView.PROVIDER_GOOGLE}
				style={styles.map}
				region={region}
			>

				{ selectedPickUp &&
					<MapView.Marker
						coordinate={{latitude:selectedPickUp.latitude, longitude:selectedPickUp.longitude}}
						pinColor="green"

					/>	
				}
				{ selectedDropOff &&
					<MapView.Marker
						coordinate={{latitude:selectedDropOff.latitude, longitude:selectedDropOff.longitude}}
						pinColor="blue"

					/>	
				}
				{ showCarMaker &&
					<MapView.Marker
						coordinate={{latitude:driverLocation.coordinate.coordinates[1], longitude:driverLocation.coordinate.coordinates[0]}}
						image={carMarker}

					/>	
				}


			</MapView>
		</View>
	)
}

export default MapTrack;