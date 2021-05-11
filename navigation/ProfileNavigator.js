import React from "react";
import { Image, View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfileScreen";
import FeedbackScreen from "../screens/FeedbackScreen";
import ReportScreen from "../screens/ReportScreen";
import WorkingScreen from "../screens/WorkingScreen";
import ReferScreen from "../screens/ReferScreen";
import About from "../screens/About";
import Ratings from "../components/Ratings";
import EditProfile from "../screens/EditProfile";

const Stack = createStackNavigator();

const ProfileNavigator = ({ navigation, route }) => {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({ tabBarVisible: false });
  } else {
    navigation.setOptions({ tabBarVisible: true });
  }
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      showLabel="false"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Feedback" component={FeedbackScreen} />
      <Stack.Screen name="Report" component={ReportScreen} />
      <Stack.Screen name="Edit" component={EditProfile} />
      <Stack.Screen name="Work" component={WorkingScreen} />
      <Stack.Screen name="Refer" component={ReferScreen} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Ratings" component={Ratings} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
