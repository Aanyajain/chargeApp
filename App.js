import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomePageScreen from "./screens/HomePageScreen";
import CardScreen from "./components/CardScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppNavigator from "./navigation/AppNavigator";
import OnBoardingScreen from "./screens/OnBoardingScreen";
import ChargingDetails from "./screens/ChargingDetails";
import SignupScreen from "./screens/SignupScreen";
import SignupOTP from "./screens/SignupOTP";
import SignupDetails from "./screens/SignupDetails";
import ProfileScreen from "./screens/ProfileScreen";
import ChargeSuccess from "./screens/ChargeSuccess";
import ChargingStatus from "./screens/ChargingStatus";
import FeedbackScreen from "./screens/FeedbackScreen";
import FinalCharge from "./screens/FinalCharge";
import BillingScreen from "./screens/BillingScreen";
import EditProfile from "./screens/EditProfile";
import ReportScreen from "./screens/ReportScreen";
import ProfileNavigator from "./navigation/ProfileNavigator";
import FailedPayment from "./screens/FailedPayment";
import HostScreen from "./screens/HostScreen";
import RegisterHost from "./screens/RegisterHost";
import BecomeHost from "./screens/BecomeHost";
import QRScreen from "./screens/QRScreen";
import StationScreen from "./screens/StationScreen";
import SessionScreen from "./screens/SessionScreen";
import Ratings from './components/Ratings'
import PlayStore from './components/PlayStore';

export default function App() {
  // const Stack = createStackNavigator();

  return (
    // <PlayStore />
    // <ProfileScreen />
    <FailedPayment />
    // <ChargingStatus />
    // <ChargingDetails />
    // <HomePageScreen />
    // <QRScreen />
    // <RegisterHost />
    // <NavigationContainer>
    //   <Stack.Navigator
    //     screenOptions={{
    //       headerShown: false,
    //     }}
    //   >
    //     <Stack.Screen name="AppBottom" component={AppNavigator} />
    //     <Stack.Screen name="Edit" component={EditProfile} />
    //   </Stack.Navigator>
    // </NavigationContainer >
  );
}
