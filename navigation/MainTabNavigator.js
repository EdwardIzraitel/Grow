import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import CardsScreen from "../screens/CardsScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { Ionicons } from "@expo/vector-icons";
const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Cards: CardsScreen
  },
  config
);

HomeStack.navigationOptions = ({ navigation }) => {
  var tabBarVisible = true;
  const routeName = navigation.state.routes[navigation.state.index].routeName;
  if (routeName == "Cards") {
    tabBarVisible = false;
  }
  return {
    tabBarLabel: "Home",
    tabBarVisible,

    tabBarOptions: {
      activeTintColor: "#38d39f",
      inactiveTintColor: "#b8bece"
    },
    tabBarIcon: ({ focused }) => (
      <Ionicons
        // focused={focused}
        name="ios-home"
        color={focused ? "#38d39f" : "#b8bece"}
        size={26}
        // name={
        //   Platform.OS === "ios"
        //     ? `home${focused ? "" : ""}`
        //     : "md-information-circle"
        // }
      />
    )
  };
};

HomeStack.path = "";

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarOptions: {
    activeTintColor: "#38d39f",
    inactiveTintColor: "#b8bece"
  },
  tabBarIcon: ({ focused }) => (
    <Ionicons
      size={26}
      name="ios-person"
      color={focused ? "#38d39f" : "#b8bece"}
    />
  )
};

ProfileStack.path = "";

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarOptions: {
    activeTintColor: "#38d39f",
    inactiveTintColor: "#b8bece"
  },
  tabBarIcon: ({ focused }) => (
    <Ionicons
      size={26}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
      color={focused ? "#38d39f" : "#b8bece"}
    />
  )
};

SettingsStack.path = "";

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ProfileStack,
  SettingsStack
});

tabNavigator.path = "";

export default tabNavigator;
