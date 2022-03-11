import React, { useCallback, useEffect, useRef, useState } from "react";
import { SafeAreaView, ScrollView, Image, View, Text } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import FEIcon from "react-native-vector-icons/Feather";
import BottomSheet from '@gorhom/bottom-sheet';
import { SharedElement } from "react-navigation-shared-element";

import styles from "./styles";
import theme from "Theme";
import CustomBottomSheet from "Components/CustomBottomSheet";
import Button from "Components/Button";
import ImageAssets from "Assets/images";
import IconButton from "Components/IconButton";
import PartnerListItem from "App/components/modules/PartnerListScreen/PartnerListItem";
import SearchInput from "Components/SearchInput";
import { useDispatch, useSelector } from "react-redux";
import ButtonTag from "App/components/ButtonTag";
import { getClassList } from "Actions/class";
import { FilterGetAllClass } from "Types/class";

type Props = {
  route: RouteProp<ReactNavigation.RootStackParamList, "PartnerListScreen">;
  navigation: StackNavigationProp<ReactNavigation.RootStackParamList, "PartnerListScreen">;
}

const PartnerListScreen = ({ navigation }: Props) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const dispatch = useDispatch();
  const _category = useSelector((state: AppStore.AppState) => state.category);
  const _class = useSelector((state: AppStore.AppState) => state.class);
  const _type = useSelector((state: AppStore.AppState) => state.type);
  const [category, setCategory] = useState("All");
  const [type, setType] = useState("All");
  const [tempCategory, setTempCategory] = useState("All");
  const [tempType, setTempType] = useState("All");
  const [keyword, setKeyword] = useState("");

  const { categoryList = [] } = _category;
  const { classList = [] } = _class;
  const { typeList = [] } = _type;

  const onPressSearch = () => {
    console.log("Press");
  }

  const _onCancelFilter = useCallback(() => {
    setTempCategory(category);
    setTempType(type);

    bottomSheetRef.current?.close();
  }, [category, type, bottomSheetRef]);

  const _onConfirmFilter = useCallback(() => {
    setCategory(tempCategory);
    setType(tempType);

    const filterBy: FilterGetAllClass = {};

    if (tempCategory !== "All") filterBy.category = tempCategory;
    if (tempType !== "All") filterBy.types = tempType;

    dispatch(getClassList(filterBy))

    bottomSheetRef.current?.close();
  }, [tempCategory, tempType]);

  const _onPressCategory = useCallback((newCategory: string) => {
    setTempCategory(newCategory)
  }, []);

  const _onPressType = useCallback((newType: string) => {
    setTempType(newType)
  }, []);

  const onChangeSearchInput = useCallback((text: string) => {
    setKeyword(text);
  }, []);

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.container}>
        <View style={styles.bannerContainer}>
          <Image
            source={ImageAssets.Banner}
            resizeMode="cover"
            style={styles.bannerImgStyle}
          />
          <View style={styles.logoContainer}>
            <SharedElement id="home.logo">
              <Image 
                source={ImageAssets.Logo}
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
          {/* <Button 
            text="Filter"
            onPress={() => navigation.navigate("LoginScreen")}
            onPress={() => bottomSheetRef.current?.expand()}
          /> */}
          <ButtonTag 
            title="Filter"
            onPress={() => bottomSheetRef.current?.expand()}
            // type="primary"
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
              <ButtonTag 
                title="All"
                type="transparent"
                style={styles.programButton}
                onPress={() =>_onPressType("All")}
                active={tempType === "All"}
              />
              {typeList.map((item) => (
                <ButtonTag 
                  key={item.id}
                  title={item.name}
                  type="transparent"
                  style={styles.programButton}
                  onPress={() =>_onPressType(item.name)}
                  active={tempType === item.name}
                />
              ))}
            </View>
          </View>
          <View style={styles.classSection}>
            <Text style={theme.styles.textTitle}>Select Class</Text>
            <View style={styles.classList}>
              <ButtonTag 
                active={tempCategory === "All"}
                onPress={() => _onPressCategory("All")}
                style={styles.classButton}
                title="All"
                type="transparent"
              />
              {categoryList.map((item) => {
                return (
                  <ButtonTag
                    active={tempCategory === item.name}
                    key={item.id}
                    onPress={() => _onPressCategory(item.name)}
                    style={styles.classButton}
                    title={item.name}
                    type="transparent"
                  />
                )
              })}
            </View>
          </View>
          <View style={styles.buttonsSection}>
            <ButtonTag 
              title="Cancel"
              type="primary"
              size="lg"
              onPress={_onCancelFilter}
              style={{ marginRight: 5 }}
            />
            <ButtonTag 
              title="Confirm"
              type="primary"
              size="lg"
              onPress={_onConfirmFilter}
              style={{ marginLeft: 5 }}
            />
          </View>
        </View>
      </CustomBottomSheet>
    </SafeAreaView>
  );
}

export default PartnerListScreen;