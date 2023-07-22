import React, { useState } from "react";
import { View, Text } from "react-native";
import {GlobalStyle} from "../Config/GlobalStyle";
import { Colors } from "../Config/Colors";
import Button from "./Button";

export default function AllKeys() {
  // Set the state
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState(null);
  // Handle number
  const handleNumberPress = (buttonValue) => {
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + buttonValue);
    }
  };
  // Handle operation
  const handleOperationPress = (buttonValue) => {
    setOperation(buttonValue);
    setSecondNumber(firstNumber);
    setFirstNumber("");
  };
  // Handle Clear
  const clear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
    setResult(null);
  };

  const DisplayFirstNumber = () => {
    if (result !== null) {
      return (
        <Text
          style={
            result < 99999
              ? [GlobalStyle.screenFirstNumber, { color: Colors.result }]
              : [
                  GlobalStyle.screenFirstNumber,
                  { fontSize: 50, color: Colors.result },
                ]
          }
        >
          {result?.toString()}
        </Text>
      );
    }
    if (firstNumber && firstNumber.length < 6) {
      return <Text style={GlobalStyle.screenFirstNumber}>{firstNumber}</Text>;
    }
    if (firstNumber === "") {
      return <Text style={GlobalStyle.screenFirstNumber}>{"0"}</Text>;
    }
    if (firstNumber.length > 5 && firstNumber.length < 8) {
      return (
        <Text style={[GlobalStyle.screenFirstNumber, { fontSize: 70 }]}>
          {firstNumber}
        </Text>
      );
    }
    if (firstNumber.length > 7) {
      return (
        <Text style={[GlobalStyle.screenFirstNumber, { fontSize: 50 }]}>
          {firstNumber}
        </Text>
      );
    }
  };
  //   Get results
  const getResult = () => {
    switch (operation) {
      case "+":
        clear();
        setResult(parseInt(secondNumber) + parseInt(firstNumber));
        break;
      case "-":
        clear();
        setResult(parseInt(secondNumber) - parseInt(firstNumber));
        break;
      case "*":
        clear();
        setResult(parseInt(secondNumber) * parseInt(firstNumber));
        break;
      case "/":
        clear();
        setResult(parseInt(secondNumber) / parseInt(firstNumber));
        break;
      default:
        clear();
        setResult(0);
        break;
    }
  };
  return (
    <View style={GlobalStyle.viewBottom}>
      <View
        style={{
          height: 120,
          width: "90%",
          justifyContent: "flex-end",
          alignSelf: "center",
        }}
      >
        <Text style={GlobalStyle.screenSecondNumber}>
          {secondNumber}
          <Text style={{ color: "purple", fontSize: 50, fontWeight: "500" }}>
            {operation}
          </Text>
        </Text>
        {DisplayFirstNumber()}
      </View>
      <View style={GlobalStyle.row}>
        <Button title="C" isGray onPress={clear} />
        <Button
          title="+/-"
          isGray
          onPress={() => handleOperationPress("+/-")}
        />
        <Button title="％" isGray onPress={() => handleOperationPress("％")} />
        <Button title="÷" isBlue onPress={() => handleOperationPress("/")} />
      </View>
      <View style={GlobalStyle.row}>
        <Button title="7" onPress={() => handleNumberPress("7")} />
        <Button title="8" onPress={() => handleNumberPress("8")} />
        <Button title="9" onPress={() => handleNumberPress("9")} />
        <Button title="×" isBlue onPress={() => handleOperationPress("*")} />
      </View>
      <View style={GlobalStyle.row}>
        <Button title="4" onPress={() => handleNumberPress("4")} />
        <Button title="5" onPress={() => handleNumberPress("5")} />
        <Button title="6" onPress={() => handleNumberPress("6")} />
        <Button title="-" isBlue onPress={() => handleOperationPress("-")} />
      </View>
      <View style={GlobalStyle.row}>
        <Button title="1" onPress={() => handleNumberPress("1")} />
        <Button title="2" onPress={() => handleNumberPress("2")} />
        <Button title="3" onPress={() => handleNumberPress("3")} />
        <Button title="+" isBlue onPress={() => handleOperationPress("+")} />
      </View>
      <View style={GlobalStyle.row}>
        <Button title="." onPress={() => handleNumberPress(".")} />
        <Button title="0" onPress={() => handleNumberPress("0")} />
        <Button
          title="⌫"
          onPress={() => setFirstNumber(firstNumber.slice(0, -1))}
        />
        <Button title="=" isBlue onPress={() => getResult()} />
      </View>
    </View>
  );
}
