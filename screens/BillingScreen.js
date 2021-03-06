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
import { Receipt, Car } from 'svg'

function BillingScreen(props) {
  return (
    <ScrollView style={styles.cont}>
      <SafeAreaView style={styles.cont}>
        <View flexDirection="column">
          <Receipt width={wp('100%')} height={hp('18%')} />
          <TouchableOpacity
            onPress={() => console.log("back btn")}
            style={styles.back}>

            <Image
              style={{ width: wp('6%'), height: hp('3%') }}
              source={require('../images/Back.png')}
            />

          </TouchableOpacity>

          <View style={{
            marginTop: -wp('4%'),
            paddingBottom: 20
          }}>
            <Car width={wp('105%')}
              height={hp('32%')}
              marginTop={-hp("3%")}
            />
            <Text style={styles.content1}>14/03/21, 7:45 AM </Text>
            <Text style={styles.content2}>
              Rohini Community Charging Station, B-5/30, New Delhi - 110034
            </Text>
          </View>
          <View flexDirection="row">
            <Text style={styles.txt1}>Total</Text>
            <Text style={styles.txt2}>
              {'\u20B9'}475
          </Text>
          </View>
          <View style={styles.line} />

          <View flexDirection="row">
            <Text style={styles.subtxt1}>Operator cost</Text>
            <Text style={styles.subtxt2}>
              {'\u20B9'}395.75
          </Text>
          </View>

          <View flexDirection="row">
            <Text style={styles.subtxt1}>Service charge</Text>
            <Text style={styles.subtxt2}>
              {'\u20B9'} {(450.75 * 0.15).toFixed(2)}
            </Text>
          </View>

          <View flexDirection="row">
            <Text style={styles.subtxt3}>Taxes</Text>
            <Text style={styles.subtxt5}>{'\u20B9'} 00.00 </Text>
          </View>

          <View style={styles.line} />

          <View flexDirection="row">
            <Text style={styles.subtxt1}>Amount Paid</Text>
            <Text style={styles.subtxt4}>
              {'\u20B9'} 450.75
          </Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  back: {
    position: 'absolute',
    top: 35,
    left: 15,
  },
  content1: {
    fontSize: wp('5%'),
    color: '#3D3D3D',
    marginTop: wp('4%'),
    marginLeft: wp('6%'),
    fontFamily: 'SF-Pro-Display-Medium',
    position: 'absolute',
  },
  content2: {
    fontSize: wp('3.2%'),
    color: '#484848',
    marginTop: hp('6%'),
    marginRight: wp('40%'),
    marginLeft: wp('6%'),
    fontFamily: 'SF-Pro-Display-Regular',
    position: 'absolute',
  },

  txt1: {
    color: '#3D3D3D',
    fontFamily: 'SF-Pro-Display-Semibold',
    marginTop: wp('4%'),
    fontSize: wp('5.5%'),
    marginLeft: wp('10%'),
    position: 'absolute',
  },
  txt2: {
    color: '#3D3D3D',
    fontFamily: 'SF-Pro-Display-Semibold',
    marginTop: wp('4%'),
    fontSize: wp('5.5%'),
    marginLeft: wp('65%'),
  },
  line: {
    borderBottomColor: '#5F5F5F',
    borderBottomWidth: 0.7,
    width: wp('80%'),
    marginLeft: wp('10%'),
    padding: 2.5,
  },
  subtxt1: {
    color: '#3D3D3D',
    paddingTop: 10,
    fontSize: wp('3.5%'),
    marginLeft: wp('10%'),
    fontFamily: 'SF-Pro-Display-Medium',
    position: 'absolute',
    left: wp('1%'),
  },
  subtxt2: {
    color: '#3D3D3D',
    marginTop: wp('3%'),
    fontSize: wp('3.5%'),
    marginLeft: wp('68%'),
    fontFamily: 'SF-Pro-Display-Medium',
  },
  subtxt3: {
    color: '#3D3D3D',
    marginTop: wp('3%'),
    fontSize: wp('3.5%'),
    position: 'absolute',
    left: wp('11%'),
  },
  subtxt4: {
    color: '#3D3D3D',
    marginTop: wp('3%'),
    fontSize: wp('3.5%'),
    marginLeft: wp('69%'),
  },
  subtxt5: {
    color: '#3D3D3D',
    paddingBottom: 10,
    marginTop: wp('3%'),
    fontSize: wp('3.5%'),
    marginLeft: wp('68%'),
    fontFamily: 'SF-Pro-Display-Medium',
  },
});

export default BillingScreen;