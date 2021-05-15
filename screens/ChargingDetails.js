import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import LinearGradient from "react-native-linear-gradient";
import { Cost, EnergyConsumed, Time, ChargeHeader, PayBtn } from "svg";
import { BoxShadow } from "react-native-shadow";

function ChargingDetails({ navigation }) {
  const shadowOpt = {
    width: wp("100%"),
    height: hp("18%"),
    color: "#000000",
    border: 10,
    // radius: 6,
    opacity: 0.2,
    // x: 1,
    y: 62,
  };

  return (
    <ScrollView style={styles.cont}>
      <SafeAreaView style={styles.cont}>
        <View>
          <ChargeHeader width={wp("100%")} height={hp("16%")} />

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

        <View flexDirection="column">
          <LinearGradient colors={["#4B5358", "#545B60"]} style={styles.box3}>
            <View
              flexDirection="row"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <View flexDirection="row" style={{ marginRight: wp("4%") }}>
                <Time
                  height={hp("6%")}
                  width={wp("15%")}
                  margin={wp("1%")}
                  borderRadius={wp("10%") / 8}
                />
                <View>
                  <Text
                    style={{
                      fontFamily: "SF-Pro-Display-Medium",
                      color: "white",
                      fontSize: wp("5.2%"),
                      marginTop: wp("2%"),
                    }}
                  >
                    Time
                  </Text>
                  <Text
                    style={{
                      fontSize: wp("3.4%"),
                      fontFamily: "SF-Pro-Display-Regular",
                      color: "white",
                    }}
                  >
                    Charged
                  </Text>
                </View>
              </View>
              <View style={{ marginRight: wp("2%") }}>
                <Text
                  style={{
                    fontSize: wp("5.6%"),
                    color: "white",
                    fontFamily: "SF-Pro-Display-Semibold",
                    padding: wp("1%"),
                    marginTop: wp("6%"),
                    marginLeft: wp("6%"),
                  }}
                >
                  2h 35min
                </Text>
              </View>
            </View>
          </LinearGradient>

          <LinearGradient colors={["#03AD70", "#059863"]} style={styles.box1}>
            <View flexDirection="column">
              <View
                flexDirection="row"
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <EnergyConsumed
                  height={hp("6%")}
                  width={wp("15%")}
                  margin={wp("1%")}
                  borderRadius={wp("10%") / 8}
                />
                <View style={{ marginRight: wp("4%") }}>
                  <Text
                    style={{
                      fontFamily: "SF-Pro-Display-Medium",
                      color: "white",
                      fontSize: wp("5.2%"),
                      marginTop: wp("2%"),
                    }}
                  >
                    Energy
                  </Text>
                  <Text
                    style={{
                      fontFamily: "SF-Pro-Display-Regular",
                      fontSize: wp("3.4%"),
                      color: "white",
                    }}
                  >
                    Consumed
                  </Text>
                </View>
                <View style={{ marginRight: wp("2%") }}>
                  <Text
                    style={{
                      fontSize: wp("5.6%"),
                      color: "white",
                      fontFamily: "SF-Pro-Display-Semibold",
                      padding: wp("1%"),
                      marginTop: wp("6%"),
                      marginLeft: wp("2%"),
                    }}
                  >
                    17.40 kWh
                  </Text>
                </View>
              </View>
            </View>
          </LinearGradient>

          <LinearGradient colors={["#2D9CDB", "#2C93CE"]} style={styles.box2}>
            <View
              flexDirection="row"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <View flexDirection="row" style={{ marginRight: wp("4%") }}>
                <Cost
                  height={hp("6%")}
                  width={wp("15%")}
                  margin={wp("1%")}
                  marginLeft={wp("10%")}
                  borderRadius={wp("10%") / 8}
                />
                <View>
                  <Text
                    style={{
                      fontFamily: "SF-Pro-Display-Medium",
                      color: "white",
                      fontSize: wp("5.2%"),
                      marginTop: wp("2%"),
                    }}
                  >
                    Amount
                  </Text>
                  <Text
                    style={{
                      fontFamily: "SF-Pro-Display-Regular",
                      fontSize: wp("3.4%"),
                      color: "white",
                    }}
                  >
                    Payable
                  </Text>
                </View>
              </View>
              <View style={{ marginRight: wp("2%") }}>
                <Text
                  style={{
                    fontSize: wp("5.6%"),
                    color: "white",
                    fontFamily: "SF-Pro-Display-Semibold",
                    padding: wp("1%"),
                    marginTop: wp("6%"),
                    marginLeft: wp("5%"),
                  }}
                >
                  {"\u20B9"} 148.45
                </Text>
              </View>
            </View>
          </LinearGradient>
        </View>

        {/* <BoxShadow setting={shadowOpt}> */}
        <View>
          <Text
            style={{
              fontFamily: "SF-Pro-Display-Semibold",
              marginLeft: wp("5%"),
              fontSize: wp("6%"),
              marginTop: wp("2%"),
              color: "black",
            }}
          >
            {"\u20B9"} 148.6
          </Text>

          <TouchableOpacity
            style={{
              position: "absolute",
              // top: 25,
              left: 180,
              borderRadius: wp("8%") / 4,
            }}
            onPress={() => console.log("pay now")}
          >
            <PayBtn height={hp("4.6%")} width={wp("50%")} />
          </TouchableOpacity>

          {/* </BoxShadow> */}
        </View>
      </SafeAreaView>
    </ScrollView>
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
  txt: {
    color: "white",
    fontSize: wp("8%"),
    fontFamily: "SF-Pro-Text-Bold",
    marginLeft: wp("5%"),
    marginTop: wp("7%"),
  },
  box1: {
    // backgroundColor: "#03AD70",
    height: hp("16%"),
    width: wp("70%"),
    borderRadius: hp("20%") / 8,
    marginLeft: wp("15%"),
    padding: 5,
    marginTop: hp("5%"),
    justifyContent: "center",
    alignItems: "center",
  },
  box2: {
    // backgroundColor: "#2D9CDB",
    height: hp("16%"),
    width: wp("70%"),
    borderRadius: hp("20%") / 8,
    marginLeft: wp("15%"),
    padding: 5,
    marginTop: hp("5%"),
    justifyContent: "center",
    alignItems: "center",
  },
  box3: {
    // backgroundColor: "#4B5358",
    height: hp("16%"),
    width: wp("70%"),
    borderRadius: hp("20%") / 8,
    marginLeft: wp("15%"),
    padding: 5,
    marginTop: hp("5%"),
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ChargingDetails;
