import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import ClassListScreen from "App/screens/ClassListScreen";
import SplashScreen from "Screens/SplashScreen";
import DetailClassScreen from "App/screens/DetailClassScreen";
import LoginScreen from "Screens/LoginScreen";
import RegisterScreen from "Screens/RegisterScreen";
import { ClassListModel } from "Types/class";

type RootStackParams = {
  SplashScreen: undefined;
  ClassListScreen: undefined;
  DetailClassScreen: {
    item: ClassListModel
  };
  PaymentConfirmationScreen: undefined;
  PaymentScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
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
          name="ClassListScreen" 
          component={ClassListScreen} 
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
          name="DetailClassScreen" 
          component={DetailClassScreen} 
        />
        <Stack.Screen 
          name="LoginScreen" 
          component={LoginScreen} 
        />
        <Stack.Screen 
          name="RegisterScreen" 
          component={RegisterScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;