import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import { RootStackParams } from "@mytypes/navigation";
import HomeScreen from "../screens/HomeScreen";
import SplashScreen from "../screens/SplashScreen";

const Stack = createSharedElementStackNavigator<RootStackParams>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="SplashScreen">
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          sharedElements={(route) => {
            return [
              {
                id: "home.logo"
              }
            ]
          }}
        />
        <Stack.Screen 
          name="SplashScreen" 
          component={SplashScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;