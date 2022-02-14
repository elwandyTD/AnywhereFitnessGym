import React from "react";
import { Image, SafeAreaView } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Center, Stack, HStack, Text, View } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { SharedElement } from "react-navigation-shared-element";

import { RootStackParams } from "@mytypes/navigation";
import { storage } from "../commons/utils/mmkv";

storage.set("user.name", "Elwandy")

type Props = {
  route: RouteProp<RootStackParams, "HomeScreen">;
  navigation: StackNavigationProp<RootStackParams, "HomeScreen">;
}

const HomeScreen = ({ navigation }: Props) => {
  const userName = storage.getString("user.name");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <HStack bgColor="blue.200">
          <View flex={1}>
            <SharedElement id="home.logo">
              <Image 
                source={require("../assets/images/logo.png")}
                style={{ height: 30, width: undefined }}
                resizeMode="contain"
              />
            </SharedElement>
          </View>
          <View flex={2} />
        </HStack>
        <Text>{userName}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;