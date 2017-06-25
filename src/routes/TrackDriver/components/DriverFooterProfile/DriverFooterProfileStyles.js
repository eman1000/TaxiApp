import { StyleSheet } from "react-native";
const styles = {
    footerContainer:{
        backgroundColor:"#E7E7E7",
        height:60,
        padding:10,
        flexDirection:"row"
    },
    imageContainer:{
        width:50,
        alignItems: "center",
        justifyContent: "center",
    },
    ratingContainer:{
        width:150,
        alignItems: "center",
        justifyContent: "center",
    },
    iconContainer:{
        width:50,
        alignItems: "center",
        justifyContent: "center"
    },
    icon:{
        color:"#5C5C5C",
        fontSize:30
    },
    driverPic: {
        borderColor: "#ffffff",
        borderWidth: 1,
        height: 50,
        width: 50,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        }
    }
};

export default styles;