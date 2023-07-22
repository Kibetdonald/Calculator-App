import { TouchableOpacity, Text } from "react-native";
import React, { useContext } from "react";
import { ThemeContext } from "../Config/ThemeContext";
import { GlobalStyle } from "../Config/GlobalStyle";

export default function Button({ title, onPress, isBlue, isGray }) {
  const theme = useContext(ThemeContext);
  return (
    <TouchableOpacity
      style={
        isBlue
          ? GlobalStyle.btnBlue
          : isGray
          ? GlobalStyle.btnGray
          : theme === "light"
          ? GlobalStyle.btnLight
          : GlobalStyle.btnDark
      }
      onPress={onPress}
    >
      <Text
        style={
          isBlue || isGray
            ? GlobalStyle.smallTextLight
            : theme === "dark"
            ? GlobalStyle.smallTextLight
            : GlobalStyle.smallTextDark
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
