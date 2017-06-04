import React from "react";
import {Text} from "react-native";
import { View, List, ListItem, Left, Body } from "native-base";

import Icon from "react-native-vector-icons/MaterialIcons";

import styles from "./SearchResultsStyles.js";

export const SearchResults = ({predictions, getSelectedAddress})=> {
	function handleSelectedAddress(placeID){
		getSelectedAddress(placeID)
	}

		return(
			<View style={styles.searchResultsWrapper} >
				<List 
					dataArray={predictions}
					renderRow={(item)=>
						<View>
							<ListItem onPress={()=>handleSelectedAddress(item.placeID)} button avatar>
								<Left style={styles.leftContainer}>
									<Icon style={styles.leftIcon} name="location-on" />
								</Left>
								<Body>
									<Text style={styles.primaryText}>{item.primaryText}</Text>
									<Text style={styles.secondaryText}>{item.secondaryText}</Text>
								</Body>
							</ListItem>
						</View>
					}
				/>
			</View>

		);
};

export default SearchResults;