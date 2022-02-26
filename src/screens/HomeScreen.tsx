import React, { useCallback } from "react";
import { SafeAreaView, StyleSheet, ScrollView, Image, View, Text, Dimensions, TextInput, TouchableOpacity, TextInputProps, NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RFValue } from "react-native-responsive-fontsize";
import FEIcon from "react-native-vector-icons/Feather";

// import { storage } from "../commons/utils/mmkv";
import { RootStackParams } from "types/navigation";
import theme from "../commons/theme";
import IconButton from "../commons/components/Button/IconButton";
import { SharedElement } from "react-navigation-shared-element";
import SearchInput from "../commons/components/TextField/SearchInput";
import Button from "../commons/components/Button/Button";

type Props = {
  route: RouteProp<RootStackParams, "HomeScreen">;
  navigation: StackNavigationProp<RootStackParams, "HomeScreen">;
}

const HomeScreen = ({ navigation }: Props) => {

  const onPressSearch = () => {
    console.log("Press");
  }

  const onChangeSearchInput = useCallback((text: string) => {
    console.log(text)
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ backgroundColor: "#fff" }}>
        <View style={{ flex: 1, position: "relative" }}>
          <Image
            source={require("../assets/images/banner.jpg")}
            resizeMode="cover"
            style={{ height: theme.sizes.BANNER_HEIGHT, width: undefined }}
          />
          <View style={{ position: "absolute", top: RFValue(40), left: RFValue(15) }}>
            <SharedElement id="home.logo">
              <Image 
                source={require("../assets/images/logo.png")}
                resizeMode="contain"
                style={{ maxHeight: RFValue(50), width: RFValue(160) }}
              />
            </SharedElement>
          </View>
        </View>
        <View style={{ flex: 1, paddingVertical: theme.space.LG, paddingHorizontal: theme.space.XL, flexDirection: "row", alignItems: "center" }}>
          <SearchInput 
            onChangeText={onChangeSearchInput}
          />
          <IconButton 
            icon={<FEIcon name="search" size={theme.sizes.ICON_SIZE} color={theme.colors.darkGray} />}
            onPress={onPressSearch}
            style={{ marginHorizontal: theme.space.MD, }}
          />
          <Button 
            text="Filter" 
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});

export default HomeScreen;