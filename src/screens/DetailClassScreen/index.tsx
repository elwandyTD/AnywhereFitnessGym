import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View, useWindowDimensions, Dimensions } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ScrollView } from "react-native-gesture-handler";
import Swiper from "react-native-swiper";
import FA5Icon from "react-native-vector-icons/FontAwesome5";
import FAIcon from "react-native-vector-icons/FontAwesome";
import FtIcon from "react-native-vector-icons/Fontisto";
import SLIIcon from "react-native-vector-icons/SimpleLineIcons";
import MIIcon from "react-native-vector-icons/MaterialIcons";
import { RFValue } from "react-native-responsive-fontsize";
import MapView from "react-native-maps";
import BottomSheet from '@gorhom/bottom-sheet';
import DatePicker from "react-native-date-picker";
import { useDispatch, useSelector } from "react-redux";
import RenderHtml from 'react-native-render-html';
import FEIcon from "react-native-vector-icons/Feather";

import styles from "./styles";
import theme from "Theme";
import Button from "Components/Button";
import CustomBottomSheet, { CustomBottomSheetHandle } from "Components/CustomBottomSheet";
import ImageAssets from "Assets/images";
import Tag from "Components/Tag";
import ViewIcon from "Modules/DetailClassScreen/ViewIcon";
import { getClassById } from "Actions/class";
import { API_URL } from "@env";
import IconButton from "App/components/IconButton";
import EquipmentImage from "Modules/DetailClassScreen/EquipmentImage";
import BackButton from "App/components/BackButton";
import ClassImage from "App/components/modules/DetailClassScreen/ClassImage";
import CustomSwiper from "App/components/modules/DetailClassScreen/CustomSwiper";
import ButtonTag from "App/components/ButtonTag";
import TextField from "App/components/TextField";
import { ClassPriceDetail } from "App/types/class";
import moment from "moment";
import ReadMore from "App/components/ReadMore";
import OpenTimeList from "App/components/modules/DetailClassScreen/OpenTimeList";
import BookingBottomSheet, { BookingBottomHandle } from "App/components/modules/DetailClassScreen/BookingBottomSheet";
import { normalizeDateNumber } from "App/utils/format";

type DetailClassScreenProps = {
  route: RouteProp<ReactNavigation.RootStackParamList, "DetailClassScreen">;
  navigation: StackNavigationProp<ReactNavigation.RootStackParamList, "DetailClassScreen">;
}

type CustomClassPriceDetail = ClassPriceDetail & {
  type: string;
  number: string;
}

const DetailClassScreen = ({ navigation, route }: DetailClassScreenProps) => {
  const _class = useSelector((state: AppStore.AppState) => state.class);
  const bottomSheetRef = useRef<BookingBottomHandle>(null);
  const dispatch = useDispatch();
  const [activeImageSection, setActiveImageSection] = useState<"Store" | "Equipment">("Store");
  const [date, setDate] = useState<string | null>(null);
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const [selectedPackage, setSelectedPackage] = useState<CustomClassPriceDetail | null>(null);
  
  const { item } = route.params;
  const { detailClass, loading } = _class;
  const { width } = useWindowDimensions();

  useEffect(() => {
    dispatch(getClassById(item.id));
  }, [item]);

  useEffect(() => {
    console.log(loading, "Loading");
  }, [loading]);

  const _onChangeImageSection = useCallback((section: "Store" | "Equipment") => {
    setActiveImageSection(section);
  }, [])

  return (
    <SafeAreaView style={styles.wrapper}>
      { loading ? (
        <Text>Loading</Text>
      ) : (
        <>
          <ScrollView style={styles.container}>
            <View style={styles.logoContainer}>
              <BackButton 
                onPress={() => navigation.goBack()}
              />
            </View>
            {activeImageSection === "Store" ? (
              <CustomSwiper
                key={detailClass.images?.length}
              >
                {activeImageSection === "Store" && detailClass?.images ? 
                  detailClass.images.map((image) => (
                    <ClassImage
                      key={image.id}
                      image={image}
                    />
                )) : <View /> }
              </CustomSwiper>
            ) : (
              <CustomSwiper 
                key={detailClass.equipments?.length}
              >
                {detailClass?.equipments ? 
                  detailClass.equipments.map((equipment) => (
                    <EquipmentImage key={equipment.id} equipment={equipment} />
                )) : <View /> }
              </CustomSwiper>
            )}
            <View style={styles.iconsContainer}>
              <ViewIcon 
                text="Store" 
                active={activeImageSection === "Store" ? true : false}
                style={styles.iconStyle} 
                onPress={() => _onChangeImageSection("Store")}
              >
                <FtIcon name="shopping-store" size={RFValue(28)} color={activeImageSection === "Store" ? theme.colors.white : theme.colors.black} />
              </ViewIcon>
              <ViewIcon 
                text="Equipment"
                active={activeImageSection === "Equipment" ? true : false}
                style={styles.iconStyle} 
                onPress={() => _onChangeImageSection("Equipment")}
              >
                <FA5Icon name="dumbbell" size={RFValue(28)} color={activeImageSection === "Equipment" ? theme.colors.white : theme.colors.black} />
              </ViewIcon>
            </View>
            <View style={styles.detailContainer}>
              <Image 
                source={ImageAssets.Logo}
                resizeMode="contain"
                style={styles.logoImgStyle}
              />
              <Text style={styles.textTitle}>{detailClass.store?.store_name}</Text>
              <View style={styles.tagContainer}>
                {detailClass.types_name && detailClass.category_name && (
                  <>
                    <Tag type="secondary" marginBottom={5} text={detailClass.types_name} />
                    <Tag text={detailClass.category_name} />
                  </>
                )}
              </View>
              <ReadMore
                minimazeTo={10}
              >
                <RenderHtml 
                  contentWidth={width}
                  source={{ html: item.content.description || "" }}
                />
              </ReadMore>

              <View style={styles.detailList}>
                <View style={styles.detailListItem}>
                  <FA5Icon name="building" size={22} style={styles.detailIconStyle} />
                  <Text style={styles.detailTextStyle}>{detailClass.store?.store_name}</Text>
                  {/* <Text style={styles.detailTextStyle}>Project M, Co. Ltd</Text> */}
                </View>
                <View style={styles.detailListItem}>
                  <FtIcon name="map-marker-alt" size={22} style={styles.detailIconStyle} />
                  <Text style={styles.detailTextStyle}>{`${detailClass.store?.store_address?.after_street}, ${detailClass.store?.store_address?.prefectures}`}</Text>
                  {/* <Text style={styles.detailTextStyle}>2-2-18 Yotsuya, Shinjuku-ku, Tokyo VORT Yotsuya 8F.</Text> */}
                </View>
                <View style={styles.detailListItem}>
                  <FAIcon name="users" size={22} style={styles.detailIconStyle} />
                  <Text style={styles.detailTextStyle}>{detailClass.capacity  || 0} person</Text>
                </View>
                <View style={styles.detailListItem}>
                  <SLIIcon name="size-fullscreen" size={22} style={styles.detailIconStyle} />
                  <Text style={styles.detailTextStyle}>{detailClass.breadth} m</Text>
                </View>
                <View style={[styles.detailListItem]}>
                  <MIIcon name="access-time" size={22} style={[styles.detailIconStyle, { alignSelf: "flex-start" }]} />
                  <OpenTimeList />
                </View>
              </View>
            </View>
            <View style={styles.mapContainer}>
              <Text style={styles.textMaps}>Maps</Text>
              <MapView 
                // region={{ 
                //   // latitude: detailClass.store?.store_address?.latitude || 0,
                //   // longitude: detailClass.store?.store_address?.longitude || 0 
                //   latitude: 0,
                //   longitude: 0
                // }} 
                region={{ latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }} 
                style={styles.mapStyle}
              />
            </View>
          </ScrollView>
          <View style={styles.bookingButtonContainer}>
            <Button text="Booking" onPress={() => bottomSheetRef.current?.open()} style={styles.bookingButton} />
          </View>
          <BookingBottomSheet 
            ref={bottomSheetRef}
          />
        </>
      )}
    </SafeAreaView>
  );
}

export default DetailClassScreen;