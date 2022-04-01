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
import CustomBottomSheet from "Components/CustomBottomSheet";
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
  const bottomSheetRef = useRef<BottomSheet>(null);
  const dispatch = useDispatch();
  const [activeImageSection, setActiveImageSection] = useState<"Store" | "Equipment">("Store");
  const [date, setDate] = useState<Date | null>(null);
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const [selectedPackage, setSelectedPackage] = useState<CustomClassPriceDetail | null>(null);
  
  const { item } = route.params;
  const { detailClass, loading } = _class;
  const { width } = useWindowDimensions();

  const days = useMemo(() => ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"], []);

  const packageList: CustomClassPriceDetail[] = useMemo(() => {
    const hourlyPrice: {[key: string]: ClassPriceDetail} = JSON.parse(JSON.stringify(detailClass.price?.hourly || {}));
    const monthlyPrice: {[key: string]: ClassPriceDetail} = JSON.parse(JSON.stringify(detailClass.price?.monthly || {}));
    const list = {...hourlyPrice, ...monthlyPrice}
    
    const updatedList: CustomClassPriceDetail[] = Object.keys(list).map((val) => {
      const item: any = {};
      if (Object.keys(hourlyPrice).includes(val)) {
        item.type = "hourly";
      } else {
        item.type = "monthly";
      }
      item.number = val;

      return Object.assign(item, list[val]);
    });
    return updatedList;
  }, [detailClass]);

  const generateFullBookingTime = useMemo(() => {
    const dateNow = moment();
    const dayNow: string = days[dateNow.day()] || "monday";
    
    if (detailClass.training?.detail) {
      const dateClassNow = detailClass.training.detail[dayNow] || "monday";
      const startTime = moment(`${dateNow.format("YYYY-MM-DD")}T${dateClassNow.start_hours}:00`);
      const endTime = moment(`${dateNow.format("YYYY-MM-DD")}T${dateClassNow.end_hours}:00`);
      const listFullTime = [];
      // console.log(startDate, endDate, "Format");
      // let val1 = startTime.clone();
      // let val2 = val1.clone().add("minute", 10);
      // console.log(val1, val2, "VAl 1");
      // console.log(`${val1.hours()}:${normalizeDateNumber(val1.minutes().toString())}`, `${val2.hours()}:${val2.minutes()}`, "VAl 1");
      
      // val1 = val2.clone();
      // val2 = val1.clone().add("minute", 10);
      // console.log(val1, val2, "VAl 1");
      
      // val1 = val2.clone();
      // val2 = val1.clone().add("minute", 10);
      // console.log(val1, val2, "VAl 1");
      
      // val1 = val2.clone();
      // val2 = val1.clone().add("minute", 10);
      // console.log(val1, val2, "VAl 1");

      // while (val1 < endTime) {
      //   val1 = val2.clone();
      //   val2 = val1.clone().add("minute", Number(detailClass.buffer_time || 10));
      //   console.log(`${val1.hours()}:${normalizeDateNumber(val1.minutes().toString())}`, `${val2.hours()}:${val2.minutes()}`, "VAl 1");
      // }
      // console.log(endTime)

      return detailClass.buffer_time;
    }
    
    return [];
  }, [detailClass]);

  console.log(generateFullBookingTime, "Full Time");
  console.log(detailClass.training?.detail, "Date");

  useEffect(() => {
    dispatch(getClassById(item.id));
  }, [item]);

  useEffect(() => {
    console.log(loading, "Loading");
  }, [loading]);

  const _onChangeImageSection = useCallback((section: "Store" | "Equipment") => {
    setActiveImageSection(section);
  }, [])

  const _onSelectedPackage =  useCallback((item: CustomClassPriceDetail) => {
    console.log(selectedPackage?.number, item.number)
    if (!selectedPackage || (selectedPackage && selectedPackage.number !== item.number)) {
      setSelectedPackage(item);
      return;
    }
    
    setSelectedPackage(null);
  }, [selectedPackage]);

  const _onConfirmDate = useCallback((date: Date) => {
    setDate(date)
  }, [date]);

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
            <Button text="Booking" onPress={() => bottomSheetRef.current?.expand()} style={styles.bookingButton} />
          </View>
          <CustomBottomSheet ref={bottomSheetRef}>
            <View style={styles.bottomsheetContainer}>
                <Text style={{ alignSelf: "center", fontSize: theme.fontSize["4XL"], fontWeight: "bold", color: theme.colors.black, marginBottom: RFValue(15) }}>Choose Your Package</Text>
                <Text style={[styles.textHeaderBottomsheet]}>Package</Text>
                <View style={styles.packageList}>
                  {packageList.map((item, i) => (
                    <ButtonTag 
                      key={i}
                      active={item.number === selectedPackage?.number || false}
                      type="transparent"
                      title={`${item.number} mnt`} 
                      style={styles.package}
                      onPress={() => _onSelectedPackage(item)}
                    />
                  ))}
                </View>
              <View style={styles.rightInput}>
                <Text style={[styles.textTitleRightInput]}>Date</Text>
                <TextField 
                  containerStyle={styles.textField}
                  label="date"
                  noLabel 
                  type="date"
                  value={date?.toISOString() || ''}
                  minimumDate={moment(new Date()).add(1, 'day').toDate()}
                  onConfirmDate={_onConfirmDate}
                />
              </View>
              <View style={styles.rightInput}>
                <Text style={[styles.textTitleRightInput]}>Time</Text>
                <TextField 
                  containerStyle={styles.textField}
                  label="time"
                  noLabel 
                  type="select"
                />
              </View>
              <View style={styles.priceContainer}>
                <Text style={styles.priceText}>価格</Text> 
                <Text style={styles.priceText}>JPY {selectedPackage?.discount_price || 0}</Text> 
              </View>
              <View>
                <Text>Checkout</Text>
              </View>
            </View>
          </CustomBottomSheet>
        </>
      )}
    </SafeAreaView>
  );
}

export default DetailClassScreen;