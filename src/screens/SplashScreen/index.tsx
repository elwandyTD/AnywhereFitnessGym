import React, { useEffect } from "react";
import { View, Image } from "react-native";
// import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SharedElement } from "react-navigation-shared-element";

import styles from "./styles";

interface Props {
  navigation: StackNavigationProp<ReactNavigation.RootStackParamList, "SplashScreen">;
  // route: RouteProp<ReactNavigation.RootStackParamList, "SplashScreen">
}

const SplashScreen = ({ navigation }: Props) => {
  useEffect(() => {
    const navigateToHome = setTimeout(() => {
      navigation.replace("PartnerListScreen");
    }, 1000);

    return () => clearTimeout(navigateToHome);
  });

  return (
    <View style={styles.container}>
      <SharedElement id="home.logo" style={styles.sharedElementContainer}>
        <Image 
          source={require("../../assets/images/logo.png")}
          style={styles.logoImgStyle}
          resizeMode="contain"
        />
      </SharedElement>
    </View>
  );
}

export default SplashScreen;