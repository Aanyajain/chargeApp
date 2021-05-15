import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Details, Car } from 'svg'

function FinalCharge(props) {
  return (
    <ScrollView style={styles.cont}>
      <SafeAreaView style={styles.cont}>
        <View>

          <Details
            width={wp("100%")}
            height={hp("16%")}
          />

          <TouchableOpacity
            onPress={() => console.log("back btn")}
            style={styles.back}
          >

            <Image
              style={{ width: wp("5%"), height: hp("3%") }}
              source={require("../images/Back.png")}
            />

          </TouchableOpacity>

        </View>

        <View flexDirection="row">
          <View style={styles.box1} flexDirection="column">
            <View flexDirection="row">
              <Image
                source={require("../images/energy-icon.png")}
                style={{
                  height: hp("5%"),
                  width: wp("10%"),
                  margin: wp("3%"),
                  borderRadius: wp("10%") / 8,
                }}
              />
              <View>
                <Text
                  style={{
                    color: "white",
                    fontSize: wp("5%"),
                    marginTop: wp("2%"),
                    fontFamily: "SF-Pro-Display-Medium",
                  }}
                >
                  Energy
                </Text>
                <Text
                  style={{
                    fontSize: wp("3.5%"),
                    color: "white",
                    fontFamily: "SF-Pro-Display-Regular",
                  }}
                >
                  Consumed
                </Text>
              </View>
            </View>
            <Text
              style={{
                fontSize: wp("8%"),
                color: "white",
                fontFamily: "SF-Pro-Display-Semibold",
                padding: wp("1%"),
                marginTop: wp("4%"),
                marginLeft: wp("3%"),
              }}
            >
              7.4 kWh
            </Text>
          </View>

          <View style={styles.box2} flexDirection="column">
            <View flexDirection="row">
              <Image
                source={require("../images/cost.png")}
                style={{
                  height: hp("5%"),
                  width: wp("10%"),
                  margin: wp("3%"),
                  borderRadius: wp("10%") / 8,
                }}
              />
              <View>
                <Text
                  style={{
                    fontFamily: "SF-Pro-Display-Medium",
                    color: "white",
                    fontSize: wp("5%"),
                    marginTop: wp("2%"),
                  }}
                >
                  Amount
                </Text>
                <Text
                  style={{
                    fontSize: wp("3.5%"),
                    color: "white",
                    fontFamily: "SF-Pro-Display-Regular",
                  }}
                >
                  Payable
                </Text>
              </View>
            </View>
            <Text
              style={{
                fontSize: wp("8%"),
                color: "white",
                fontFamily: "SF-Pro-Display-Semibold",
                padding: wp("1%"),
                marginTop: wp("4%"),
                marginLeft: wp("4%"),
              }}
            >
              48 INR
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: wp("6%"),
            color: "#3D3D3D",
            marginTop: wp("4%"),
            marginLeft: wp("6%"),
            fontFamily: "SF-Pro-Display-Medium",
          }}
        >
          14/03/21, 7:45 AM
        </Text>
        <Text
          style={{
            fontSize: wp("3.8%"),
            color: "#484848",
            marginTop: wp("2%"),
            marginRight: wp("20%"),
            marginLeft: wp("6%"),
            fontFamily: "SF-Pro-Display-Regular",
          }}
        >
          Rohini Community Charging Station, B-5/30, New Delhi - 110034
        </Text>
        <View flexDirection="row">
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => console.log("receipt")}
          >
            <Image
              source={require("../images/receiptBtn.png")}
              style={styles.btn1}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => console.log("report ")}
          >
            <Image
              source={require("../images/reportbtn.png")}
              style={styles.btn2}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginLeft: wp("20%"),
            marginTop: wp("16%"),
            width: wp("60%"),
          }}
        >
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => console.log("continue")}
          >
            <Image
              source={require("../images/continue.png")}
              style={styles.btn3}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: "white",
  },
  back: {
    position: "absolute",
    top: 35,
    left: 15,
  },
  box1: {
    backgroundColor: "#03AD70",
    height: hp("19%"),
    width: wp("40%"),
    borderRadius: hp("20%") / 8,
    margin: wp("5%"),
    padding: 5,
    marginTop: hp("5%"),
  },
  box2: {
    backgroundColor: "#2D9CDB",
    height: hp("19%"),
    width: wp("40%"),
    borderRadius: hp("20%") / 8,
    margin: wp("5%"),
    padding: 5,
    marginTop: hp("5%"),
  },
  btn1: {
    width: wp("38%"),
    height: hp("5.5%"),
    marginLeft: wp("8%"),
    borderRadius: wp("6%") / 2,
    marginTop: wp("10%"),
  },
  btn2: {
    width: wp("38%"),
    height: hp("5.5%"),
    marginLeft: wp("8%"),
    borderRadius: wp("6%") / 2,
    marginTop: wp("10%"),
  },
  btn3: {
    width: wp("60%"),
    height: hp("6%"),
    borderRadius: wp("6%") / 2,
  },
});

export default FinalCharge;
