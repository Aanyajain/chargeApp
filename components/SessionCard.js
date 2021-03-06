import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

function SessionCard({ status, days, loc }) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.heading}>PlugIn India</Text>
          <View style={{ flexDirection: "column" }}>
            <View style={{ flexDirection: "row", marginTop: wp("1.2%") }}>
              <Image source={require("../images/tick.png")} />
              <Text style={styles.status}>{status}</Text>
            </View>
            <Text style={styles.subtxt}>Last Charged: {days} days ago</Text>
            <Text style={styles.loc}>{loc}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "column", marginTop: -wp("1%") }}>
          <Text style={styles.txt2}>Operator: veCharge Community</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.subtitle}>{"\u20B9"} 500</Text>
            <Text style={styles.subtitle2}>7.4 kwh</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", marginTop: wp("3%") }}>
          <TouchableOpacity
            activeOpacity={0.4}
            style={{ marginLeft: -wp("38%"), marginTop: wp("16%") }}
          >
            <Image
              source={require("../images/navigate.png")}
              style={{
                height: hp("7%"),
                width: wp("17%"),
                borderRadius: hp("4%") / 4,
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.4}
            style={{ marginLeft: -wp("20%"), marginTop: wp("16%") }}
          >
            <Image
              source={require("../images/charge_now.png")}
              style={{
                height: hp("7%"),
                width: wp("17%"),

                borderRadius: hp("4%") / 4,
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    // borderWidth: 0.3,
    overflow: Platform.OS === "android" ? "hidden" : "",
    paddingLeft: wp("5%"),
    paddingTop: wp("3%"),
    paddingBottom: wp("5%"),
    marginVertical: wp("1%"),
    marginRight: wp("2%"),
    height: hp("18%"),
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
    fontSize: wp("5.8%"),
    marginTop: -wp("1%"),
  },
  status: {
    color: "#333333",
    fontFamily: "OpenSans-Regular",
  },
  loc: {
    color: "#484848",
    fontFamily: "SF-Pro-Display-Regular",
    fontSize: wp("2.8%"),
    marginTop: wp("3.7%"),
    marginRight: wp("38%"),
  },
  txt: {
    marginTop: wp("3%"),
    marginLeft: -wp("32%"),
    color: "black",
    fontFamily: "SF-Pro-Display-Medium",
    fontSize: wp("2.6%"),
  },
  subtxt: {
    marginTop: wp("2%"),
    marginLeft: wp("1%"),
    color: "black",
    fontFamily: "SF-Pro-Display-Medium",
    fontSize: wp("2.7%"),
  },
  txt2: {
    marginTop: wp("16%"),
    marginLeft: -wp("36%"),
    color: "black",
    fontFamily: "SF-Pro-Display-Medium",
    fontSize: wp("2.7%"),
  },
  subtitle: {
    backgroundColor: "#00A2FD",
    height: hp("3%"),
    width: wp("16%"),
    color: "#FFFFFF",
    marginLeft: -wp("36%"),
    borderRadius: wp("12%") / 4,
    padding: 3,
    fontSize: wp("3%"),
    textAlign: "center",
    marginTop: -wp("18%"),
    marginRight: wp("10%"),
  },
  subtitle2: {
    backgroundColor: "#05C07D",
    height: hp("3%"),
    width: wp("16%"),
    color: "#FFFFFF",
    marginLeft: -wp("8%"),
    borderRadius: wp("12%") / 4,
    padding: 3,
    fontSize: wp("3%"),
    textAlign: "center",
    marginTop: -wp("18%"),
  },
});

export default SessionCard;
