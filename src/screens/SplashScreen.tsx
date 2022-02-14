import React, { useEffect } from "react";
import { Center, Image } from "native-base";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "@mytypes/navigation";
import { RouteProp } from "@react-navigation/native";
import { SharedElement } from "react-navigation-shared-element";

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
    <Center flex={1} paddingX="12">
      <SharedElement id="home.logo">
        <Image 
          source={require("../assets/images/logo.png")}
          height={undefined}
          width={undefined}
          resizeMode="contain"
          alt="logo"
        />
      </SharedElement>
    </Center>
  );
}

export default SplashScreen;