import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

import RNScreenKeyboard from "rn-screen-keyboard";

export default function App() {
  const [value, setValue] = React.useState<string>("");
  return (
    <View style={styles.container}>
      <TextInput value={value} style={styles.input} />
      <RNScreenKeyboard
        textStyle={{ color: "gray" }}
        backspaceTint={"gray"}
        cellStyle={{
          borderRadius: 100,
          backgroundColor: "lightblue",
          margin: 5
        }}
        value={value}
        onKeyPress={(val: string) => setValue(val)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    padding: 10,
    backgroundColor: "#ddd",
    width: "50%",
    borderRadius: 20,
    fontSize: 20,
    letterSpacing: 20,
    textAlign: "center"
  }
});
