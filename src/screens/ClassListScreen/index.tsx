import React, { useCallback, useEffect, useRef, useState } from "react";
import { SafeAreaView, ScrollView, Image, View, RefreshControl } from "react-native";
import { RouteProp, useFocusEffect } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import FEIcon from "react-native-vector-icons/Feather";
import { SharedElement } from "react-navigation-shared-element";

import styles from "./styles";
import theme from "Theme";
import FilterBottomSheet from "Modules/ClassListScreen/FilterBottomSheet";
import ImageAssets from "Assets/images";
import IconButton from "Components/IconButton";
import ClassListItem from "Modules/ClassListScreen/ClassListItem";
import SearchInput from "Components/SearchInput";
import { useDispatch, useSelector } from "react-redux";
import ButtonTag from "App/components/ButtonTag";
import { getClassList, setFilter } from "Actions/class";
import { FilterGetAllClass } from "Types/class";
import Alert, { AlertHandle } from "App/components/Alert";

type Props = {
  route: RouteProp<ReactNavigation.RootStackParamList, "ClassListScreen">;
  navigation: StackNavigationProp<ReactNavigation.RootStackParamList, "ClassListScreen">;
}

type FilterBottomSheetHandle = React.ElementRef<typeof FilterBottomSheet>;

const ClassListScreen = ({ navigation }: Props) => {
  const _class = useSelector((state: AppStore.AppState) => state.class);
  const alertRef = useRef<AlertHandle>(null);
  const bottomSheetRef = useRef<FilterBottomSheetHandle>(null);
  const dispatch = useDispatch();

  const { classList = [], loading, filterBy, refresh } = _class;

  const _fetchClassList = useCallback((refresh: boolean = false) => {
    // const newFilter = JSON.parse(JSON.stringify(filterBy))
    dispatch(getClassList(filterBy, refresh));
  }, [filterBy, dispatch]);

  const _openFilterBottomSheet = useCallback(() => {
    if (bottomSheetRef.current) {
      bottomSheetRef.current.open()
    }
  }, [bottomSheetRef]);

  const _onChangeSearchInput = useCallback((text: string) => {
    dispatch(setFilter({ name: text }))
  }, [filterBy]);

  const _onPressSearch = useCallback(() => {
    _fetchClassList();
  }, [filterBy]);

  const _onRefreshing = useCallback(() => {
    _fetchClassList(true);
  }, [filterBy]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView 
        style={styles.container}
        refreshControl={
          <RefreshControl 
            refreshing={refresh}
            onRefresh={_onRefreshing}
          />
        }
      >
        <View style={styles.bannerContainer}>
          <Image
            source={ImageAssets.Banner}
            resizeMode="cover"
            style={styles.bannerImgStyle}
          />
          <View style={styles.logoContainer}>
            <Image 
              source={ImageAssets.Logo}
              resizeMode="contain"
              style={styles.logoImgStyle}
            />
          </View>
        </View>

        <View style={styles.filterContainer}>
          <SearchInput 
            onChangeText={_onChangeSearchInput}
            value={filterBy.name || ""}
          />
          <IconButton 
            icon={<FEIcon name="search" size={theme.sizes.ICON_SIZE} color={theme.colors.black} />}
            onPress={_onPressSearch}
            style={{ marginHorizontal: theme.space.MD, }}
          />
          <ButtonTag 
            title="Filter"
            onPress={_openFilterBottomSheet}
          />
        </View>
        <View style={styles.classListContainer}>
          {classList.map((item, i) => (
            <ClassListItem index={i} item={item} key={item.id} />
          ))}
        </View>
      </ScrollView>
      <FilterBottomSheet
        ref={bottomSheetRef}
      />
      <Alert
        ref={alertRef}
      />
    </SafeAreaView>
  );
}

export default ClassListScreen;