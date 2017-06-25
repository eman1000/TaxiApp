import { StyleSheet, Dimensions } from "react-native";
var width = Dimensions.get("window").width; //full width
const styles = {
    footerContainer:{
        backgroundColor:"#ffffff",
        height:90,
        padding:0
    },
    iconContainer:{
        padding:0,
        marginTop:0,
        width:width,
        alignItems: "center",
    },
    icon:{
        color:"#E7E7E7",
        fontSize:15
    },
    distanceText:{
        marginTop:5,
        color:"#FF5E3A",
        fontWeight:"bold",
        fontSize:16
    },
    onWayText:{
        marginTop:5,
        color:"#636363",
        fontSize:15
    },
    vehicleText:{
        marginTop:5,
        color:"#636363",
        fontSize:12
    }
};

export default styles;