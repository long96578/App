import { useState } from "react";
import {
  Modal,
  StyleSheet,
  Pressable,
  Text,
  View,
  Image,
  Button,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Calendar } from "react-native-calendars";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
const MyCalendarComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [markedDates, setMarkedDates] = useState({});
  const [imageSource, setImageSource] = useState(null);
  const handleDayPress = (day: any) => {
    setSelectedDate(day.dateString);
    setModalVisible(true);
  };
  const handleButtonImage1Press = () => {
    setImageSource(require("../image/b.jpg")); // Update the path to your image
  };
  const handleButtonImage2Press = () => {
    setImageSource(require("../image/c.jpg")); // Update the path to your image
  };
  const handleButtonImage3Press = () => {
    setImageSource(require("../image/a.jpg")); // Update the path to your image
  };

  const handleButtonDayPress = (props: any) => {
    const newMarkedDates = {
      ...markedDates,
      [selectedDate]: {
        selected: true,
        marked: true,
        selectedColor: props,
      },
    };
    setMarkedDates(newMarkedDates);
    setModalVisible(false);
  };
  return (
    <View style={{ flex: 1 }}>
      <Calendar onDayPress={handleDayPress} markedDates={markedDates} />
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.container}>
          <View style={styles.insideBox}>
            <View>
              <Text style={styles.header}>
                Tâm trạng hôm nay của bạn như thế nào ?
              </Text>
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Pressable
                style={styles.button}
                onPress={() => {
                  handleButtonDayPress("red");
                }}
              >
                <Ionicons name="happy" size={24} color="red" />
                <Text style={styles.header}> Vui </Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() => {
                  handleButtonDayPress("blue");
                }}
              >
                <FontAwesome5 name="sad-tear" size={24} color="blue" />
                <Text style={styles.header}>Buồn </Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() => {
                  handleButtonDayPress("green");
                }}
              >
                <FontAwesome5 name="angry" size={24} color="green" />
                <Text style={styles.header}> Giận </Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() => {
                  handleButtonDayPress("pink");
                }}
              >
                <FontAwesome5 name="tired" size={24} color="pink" />
                <Text style={styles.header}> Mệt </Text>
              </Pressable>
            </View>

            <Pressable
              style={styles.exitButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.header}> Close </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 30,
          }}
        >
          <View>
            <Text style={styles.header}> Thời gian tưới cây </Text>
            <Pressable style={styles.button} onPress={handleButtonImage1Press}>
              <Text style={styles.header}>6h00 - 8h00</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={handleButtonImage2Press}>
              <Text style={styles.header}>16h00 - 18h00 </Text>
            </Pressable>
            <Pressable style={styles.button} onPress={handleButtonImage3Press}>
              <Text style={styles.header}>20h00 - 22h00 </Text>
            </Pressable>
          </View>
          <View style={{ flex: 1, padding: 10 }}>
            {imageSource && <Image style={styles.img} source={imageSource} />}
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    fontSize: 16,
    marginRight: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "space-between",
    backgroundColor: "rgba(0,0,0,0.5)",
    marginTop: 3,
  },
  insideBox: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
  header: {
    fontSize: 30,
    textAlign: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    fontSize: 20,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    marginVertical: 10,
    borderWidth: 1,
  },
  exitButton: {
    borderRadius: 10,
    fontSize: 30,
    justifyContent: "center",
    backgroundColor: "gray",
    marginVertical: 10,
    borderWidth: 1,
  },
  img: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
export default MyCalendarComponent;
