import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import HomeScreen, { Data } from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";

export type RootStackParams = {
  HomeScreen: undefined;
  DetailScreen: {
    item: Data
  };
}

const Stack = createSharedElementStackNavigator<RootStackParams>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="HomeScreen">
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
        />
        <Stack.Screen 
          name="DetailScreen" 
          component={DetailScreen} 
          options={{
            headerBackTitleVisible: false,
            cardStyleInterpolator: ({ current: { progress } }) => {
              return {
                cardStyle: {
                  opacity: progress
                }
              }
            }
          }}
          sharedElements={(route, otherRoute, showing) => {
            const { item } = route.params;
            return [
              {
                id: `item.${item.id}.image_url`,
                animation: "move",
                resize: "clip"
              },
              {
                id: `item.${item.id}.iconName`,
                animation: "move",
                resize: "clip"
              },
              {
                id: `item.${item.id}.title`,
                animation: "move",
                resize: "clip"
              },
              {
                id: `item.${item.id}.description`,
                animation: "move",
                resize: "clip"
              },
            ];
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;