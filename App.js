import React, { useState } from "react";
import HomeScreen from "./src/Screens/HomeScreen";
import { ThemeContext } from "./src/Config/ThemeContext";
import {
  Switch,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Colors } from "./src/Config/Colors";
import { Feather } from "@expo/vector-icons";

export default function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView
        style={
          theme === "light"
            ? styles.container
            : [styles.container, { backgroundColor: "black" }]
        }
      >
        <Switch
          value={theme === "dark"}
          onValueChange={toggleTheme}
          thumbColor={theme === "dark" ? "yellow" : "white"}
        />

        <HomeScreen />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
    alignItems: "center",
    paddingTop: 20,
    justifyContent: "flex-start",
  },
});
