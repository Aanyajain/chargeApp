import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { UnpaidBg, FailedBtn, Error } from 'svg'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
console.log(windowWidth);
console.log(windowHeight);

const FailedPayment = () => {


  return (
    <View style={styles.container}>
      {/* <UnpaidBg
        width={wp("100%")}
        height={hp("90%")}
      /> */}
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.heading}>Confirm Payment</Text>
        <Error
          marginTop={windowWidth > 350 ? hp("5%") : hp("3%")}
          marginLeft={hp("8%")}
          width={wp("15%")}
        />
      </View>
      <Text style={styles.subtext}>Please pay your dues from last charging session.</Text>
      <Text style={styles.subtext2}>To continue using the veCharge, please pay</Text>
      <Text style={styles.txt}>₹ 321.52</Text>
      <TouchableOpacity style={styles.btn}
        onPress={() => console.log("btn pressed")}
      >
        <FailedBtn
          height={hp("5.5%")}
          width={wp("35%")}

        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF4E50"
  },
  btn: {
    marginTop: hp("10%"),
    marginLeft: wp("4%"),
    height: hp("5.5%"),
    width: wp("35%"),
  },
  heading: {
    fontFamily: "SF-Pro-Display-Semibold",
    color: "white",
    fontSize: 24,
    marginTop: hp("20%"),
    marginLeft: wp("8%"),
  },
  subtext: {
    fontSize: windowWidth > 350 ? 16 : 15,
    fontFamily: "SF-Pro-Display-Medium",
    color: "white",
    marginLeft: wp("8%"),
    marginTop: hp("3%"),
  },
  subtext2: {
    fontSize: windowWidth > 350 ? 14 : 12,
    fontFamily: "SF-Pro-Display-Medium",
    color: "white",
    marginLeft: wp("8%"),
    marginTop: hp("4%"),
  },
  txt: {
    color: "white",
    fontFamily: "SF-Pro-Display-Semibold",
    marginLeft: wp("8%"),
    marginTop: hp("2%"),
    fontSize: windowWidth > 350 ? 24 : 22
  },
});

export default FailedPayment;