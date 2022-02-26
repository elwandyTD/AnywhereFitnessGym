import React, { useEffect } from "react";
import { View, Image } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SharedElement } from "react-navigation-shared-element";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import { RootStackParams } from "types/navigation";
import theme from "../commons/theme";
interface Props {
  navigation: StackNavigationProp<RootStackParams, "SplashScreen">;
  route: RouteProp<RootStackParams, "SplashScreen">
}

const SplashScreen = ({ navigation }: Props) => {
  useEffect(() => {
    const navigateToHome = setTimeout(() => {
      navigation.replace("HomeScreen");
    }, 1000);

    return () => clearTimeout(navigateToHome);
  });

  return (
    <View style={{ flex: 1,justifyContent: "center", alignItems: "center", paddingHorizontal: theme.space["3XL"] }}>
      <SharedElement id="home.logo" style={{ width: "100%" }}>
        <Image 
          source={require("../assets/images/logo.png")}
          style={{ height: RFValue(120), width: "100%" }}
          resizeMode="contain"
        />
      </SharedElement>
    </View>
  );
}

export default SplashScreen;