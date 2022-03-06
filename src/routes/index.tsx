import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import PartnerListScreen from "Screens/PartnerListScreen";
import SplashScreen from "Screens/SplashScreen";
import DetailPartnerScreen from "Screens/DetailPartnerScreen";
import LoginScreen from "Screens/LoginScreen";

type RootStackParams = {
  SplashScreen: undefined;
  PartnerListScreen: undefined;
  DetailPartnerScreen: undefined;
  PaymentConfirmationScreen: undefined;
  PaymentScreen: undefined;
  LoginScreen: undefined;
}

declare global {
  namespace ReactNavigation {
    type RootStackParamList = RootStackParams;
  }
}

const Stack = createSharedElementStackNavigator<RootStackParams>();

const Routes = () => {
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
        <Stack.Screen 
          name="LoginScreen" 
          component={LoginScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;