import React, { useCallback, useRef } from "react";
import { SafeAreaView, ScrollView, Image, View, Text } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import FEIcon from "react-native-vector-icons/Feather";
import BottomSheet from '@gorhom/bottom-sheet';
import { SharedElement } from "react-navigation-shared-element";

import styles from "./styles";
import theme from "Theme";
import IconButton from "Components/IconButton";
import SearchInput from "Components/SearchInput";
import Button from "Components/Button";
import PartnerListItem from "App/components/modules/PartnerListScreen/PartnerListItem";
import CustomBottomSheet from "Components/CustomBottomSheet";

type Props = {
  route: RouteProp<ReactNavigation.RootStackParamList, "PartnerListScreen">;
  navigation: StackNavigationProp<ReactNavigation.RootStackParamList, "PartnerListScreen">;
}

const PartnerListScreen = ({ navigation }: Props) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  // const handleSheetChanges = useCallback((index: number) => {
  //   console.log('handleSheetChanges', index);
  // }, []);

  const onPressSearch = () => {
    console.log("Press");
  }

  const onChangeSearchInput = useCallback((text: string) => {
    console.log(text)
  }, []);

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.container}>
        <View style={styles.bannerContainer}>
          <Image
            source={require("../../assets/images/banner.jpg")}
            resizeMode="cover"
            style={styles.bannerImgStyle}
          />
          <View style={styles.logoContainer}>
            <SharedElement id="home.logo">
              <Image 
                source={require("../../assets/images/logo.png")}
                resizeMode="contain"
                style={styles.logoImgStyle}
              />
            </SharedElement>
          </View>
        </View>

        <View style={styles.filterContainer}>
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
            onPress={() => bottomSheetRef.current?.expand()}
          />
        </View>
        <View style={styles.classListContainer}>
          {/* <Text style={styles.textInformation}>Search for "Fitness Gym"</Text> */}
          <PartnerListItem />
          <PartnerListItem />
          <PartnerListItem />
          <PartnerListItem />
          <PartnerListItem />
        </View>
      </ScrollView>
      <CustomBottomSheet
        ref={bottomSheetRef}
      >
        <View style={[styles.wrapper, styles.bottomsheetContainer]}>
          <Text style={styles.filterTitle}>Filter</Text>
          <View style={styles.programSection}>
            <Text style={theme.styles.textTitle}>Select Program</Text>
            <View style={styles.programList}>
              <Button text="All" style={[styles.programButton, { backgroundColor: true ? theme.colors.gray : theme.colors.white }]} textStyle={[{ color: true ? theme.colors.darkGray : theme.colors.black }]} />
              <Button text="Online" style={[styles.programButton, { backgroundColor: false ? theme.colors.gray : theme.colors.white }]} textStyle={[{ color: false ? theme.colors.darkGray : theme.colors.black }]} />
              <Button text="Offline" style={[styles.programButton, { backgroundColor: false ? theme.colors.gray : theme.colors.white }]} textStyle={[{ color: false ? theme.colors.darkGray : theme.colors.black }]} />
            </View>
          </View>
          <View style={styles.classSection}>
            <Text style={theme.styles.textTitle}>Select Class</Text>
            <View style={styles.classList}>
              <Button text="All" style={[styles.classButton, { backgroundColor: true ? theme.colors.gray : theme.colors.white }]} textStyle={[{ color: true ? theme.colors.darkGray : theme.colors.black }]} />
              <Button text="Fitness club" style={[styles.classButton, { backgroundColor: false ? theme.colors.gray : theme.colors.white }]} textStyle={[{ color: false ? theme.colors.darkGray : theme.colors.black }]} />
              <Button text="24 hours gym" style={[styles.classButton, { backgroundColor: false ? theme.colors.gray : theme.colors.white }]} textStyle={[{ color: false ? theme.colors.darkGray : theme.colors.black }]} />
              <Button text="Golf" style={[styles.classButton, { backgroundColor: false ? theme.colors.gray : theme.colors.white }]} textStyle={[{ color: false ? theme.colors.darkGray : theme.colors.black }]} />
              <Button text="Yoga" style={[styles.classButton, { backgroundColor: false ? theme.colors.gray : theme.colors.white }]} textStyle={[{ color: false ? theme.colors.darkGray : theme.colors.black }]} />
              <Button text="Esthetic" style={[styles.classButton, { backgroundColor: false ? theme.colors.gray : theme.colors.white }]} textStyle={[{ color: false ? theme.colors.darkGray : theme.colors.black }]} />
              <Button text="Others" style={[styles.classButton, { backgroundColor: false ? theme.colors.gray : theme.colors.white }]} textStyle={[{ color: false ? theme.colors.darkGray : theme.colors.black }]} />
            </View>
          </View>
          <View style={styles.buttonsSection}>
            <Button onPress={() => bottomSheetRef.current?.close()} text="Cancel" style={[styles.actionButton, { marginRight: 5 }]} textStyle={styles.textActionButton} />
            <Button onPress={() => bottomSheetRef.current?.close()} text="Confirm" style={[styles.actionButton, { marginLeft: 5 }]} textStyle={styles.textActionButton} />
          </View>
        </View>
      </CustomBottomSheet>
    </SafeAreaView>
  );
}

export default PartnerListScreen;