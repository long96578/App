import { useState } from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const HomeScreen = () => {
  const getCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    //Alert.alert(date + '-' + month + '-' + year);
    // You can turn it in to your desired format
    return date + "-" + month + "-" + year; //format: d-m-y;
  };
  const [text, onChangeText] = useState("");
  return (
    <ImageBackground
      source={require("../image/background.jpg")}
      resizeMode="cover"
      imageStyle={{ opacity: 0.5 }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.header}> Ego Brown </Text>
        {/* <View>
          <Image style={styles.image} source={require("../image/icon.jpg")} />
        </View> */}
        <View>
          <Text style={styles.text}>Hôm nay là ngày {getCurrentDate()}</Text>
        </View>
        <View>
          <Text style={styles.text}>Nhật ký hôm nay:</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          ></TextInput>
        </View>
      </View>
    </ImageBackground>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    fontSize: 30,
    fontFamily: "OpenSans",
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    fontSize: 30,
    fontFamily: "OpenSans",
    fontWeight: "bold",
    alignContent: "center",
  },
  image: {
    width: 400,
    height: 400,
  },
  input: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 30,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
