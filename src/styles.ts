import { Platform, StyleSheet } from "react-native";

// const defaultStyle = StyleSheet.create({});

const styles = StyleSheet.create({
  container: {},
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch"
  },
  cell: {
    padding: 10,
    alignSelf: "stretch",
    minHeight: 50,
    minWidth: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 20,
    color: "white"
  },
  backspace: {
    resizeMode: Platform.OS === "android" ? "center" : "contain",
    width: 20,
    height: 20
  }
});

export const default_ripple_color = "#ddd";

export default styles;
