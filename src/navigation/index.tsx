import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import { RootStackParams } from "types/navigation";
import PartnerListScreen from "../screens/PartnerListScreen";
import SplashScreen from "../screens/SplashScreen";
import DetailPartnerScreen from "../screens/DetailPartnerScreen";

const Stack = createSharedElementStackNavigator<RootStackParams>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="SplashScreen">
        <Stack.Screen 
          name="PartnerListScreen" 
          component={PartnerListScreen} 
        />
        <Stack.Screen 
          name="SplashScreen" 
          component={SplashScreen}
          sharedElements={() => {
            return [
              {
                id: "home.logo",
              }
            ];
          }}
        />
        <Stack.Screen 
          name="DetailPartnerScreen" 
          component={DetailPartnerScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;