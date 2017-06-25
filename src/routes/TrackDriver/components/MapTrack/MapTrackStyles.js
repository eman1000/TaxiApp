import { StyleSheet, Dimensions } from "react-native";
var width = Dimensions.get("window").width; //full width
const styles = {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    map: {
        ...StyleSheet.absoluteFillObject
    },
    inputWrapper:{
        top:0,
        position:"absolute",
        backgroundColor:"#fff",
        width:width
    },
    inputSearch:{
        backgroundColor:"#fff"
    }
};

export default styles;