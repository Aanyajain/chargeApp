import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

function Recent({ days, dis, loc }) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.heading}>PlugIn India</Text>
          <View style={{ flexDirection: "column" }}>
            <View style={{ flexDirection: "row", marginTop: wp("2%") }}>
              <Image source={require("../images/tick.png")} />
              <Text style={styles.status}>Available</Text>
            </View>
            <Text style={styles.loc}>{loc}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "column" }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.subtitle}>{"\u20B9"} 500</Text>
            <Text style={styles.subtitle2}>7.4 kwh</Text>
          </View>
          <Text style={styles.txt}>Last Charged: {days} days ago</Text>
          <Text style={styles.txt2}>Operator: veCharge Community</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    borderColor: "#7c7c7c",
    // borderWidth: 0.3,
    overflow: Platform.OS === "android" ? "hidden" : "",
    paddingLeft: wp("5%"),
    paddingTop: wp("3%"),
    paddingBottom: wp("5%"),
    marginRight: wp("2%"),
    marginTop: hp("3%"),
    height: hp("20%"),
    width: wp("90%"),
    left: wp("5%"),
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  heading: {
    fontFamily: "SF-Pro-Display-Medium",
    color: "black",
    fontSize: wp("5.6%"),
    marginTop: wp("1%"),
  },
  status: {
    color: "#333333",
    fontFamily: "OpenSans-Regular",
  },
  loc: {
    color: "#484848",
    fontFamily: "SF-Pro-Display-Regular",
    fontSize: wp("2.5%"),
    marginTop: wp("3%"),
    marginRight: wp("38%"),
  },
  subtitle: {
    backgroundColor: "#00A2FD",
    height: hp("3%"),
    width: wp("16%"),
    color: "#FFFFFF",
    marginLeft: -wp("32%"),
    borderRadius: wp("12%") / 4,
    padding: 3,
    fontSize: wp("3%"),
    textAlign: "center",
    marginTop: wp("6%"),
    marginRight: wp("10%"),
  },
  subtitle2: {
    backgroundColor: "#05C07D",
    height: hp("3%"),
    width: wp("16%"),
    color: "#FFFFFF",
    marginLeft: -wp("6%"),
    borderRadius: wp("12%") / 4,
    padding: 3,
    fontSize: wp("3%"),
    textAlign: "center",
    marginTop: wp("6%"),
  },
  txt: {
    marginTop: wp("3%"),
    marginLeft: -wp("30%"),
    color: "black",
    fontFamily: "SF-Pro-Display-Medium",
    fontSize: wp("2.6%"),
  },
  txt2: {
    marginTop: wp("2%"),
    marginLeft: -wp("32%"),
    color: "black",
    fontFamily: "SF-Pro-Display-Medium",
    fontSize: wp("2.6%"),
  },
});

export default Recent;
