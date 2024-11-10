import { Button, Modal, Text, View } from "react-native";
import MoodScreen from "./components/MoodTracker";
import CalendarScreen from "./components/Calendar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import notifee, { TimestampTrigger, TriggerType } from "@notifee/react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/Home";
import { createDrawerNavigator } from "@react-navigation/drawer";

SplashScreen.preventAutoHideAsync();
const App = () => {
  const [loaded, error] = useFonts({
    OpenSans: require("./assets/fonts/OpenSans-Regular.ttf"),
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);
  if (!loaded && !error) {
    return null;
  }
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  return (
    // <View>
    //   <MoodScreen />
    //   <CalendarScreen />
    //   <HomeScreen />
    // </View>
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator> */}
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Trang chủ" }}
        />
        {/* <Drawer.Screen name="MoodTracker" component={MoodScreen   /} /> */}
        <Drawer.Screen name="Calendar" component={CalendarScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
