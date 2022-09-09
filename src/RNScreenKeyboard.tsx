import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import { CellType, LastRowType, RNScreenKeyboardType, RowType } from "./types";

const rows: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const RNScreenKeyboard = ({
  value,
  onKeyPress,
  textStyle,
  cellStyle,
  rowStyle,
  BackSpaceComponent,
  lastRowStyle,
  Left,
  Right,
  Center,
  backspaceTint,
}: RNScreenKeyboardType) => {
  const handleKeyPress = (key: string) => {
    onKeyPress((value += key));
  };
  const handleBackSpace = () => {
    onKeyPress(value.toString().substring(0, value.toString().length - 1));
  };
  const handleClear = () => {
    onKeyPress("");
  };
  return (
    <View style={styles.container}>
      {rows.map((row: number[], index: number) => {
        return (
          <Row
            textStyle={textStyle}
            cellStyle={cellStyle}
            rowStyle={rowStyle}
            onKeyPress={handleKeyPress}
            key={index}
            chars={row}
          />
        );
      })}
      <LastRow
        cellStyle={cellStyle}
        textStyle={textStyle}
        BackSpaceComponent={BackSpaceComponent}
        onKeyPress={handleKeyPress}
        onBackSpace={handleBackSpace}
        onLongBackSpace={handleClear}
        lastRowStyle={lastRowStyle}
        Left={Left}
        Right={Right}
        Center={Center}
        backspaceTint={backspaceTint}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
  },
  cell: {
    padding: 10,
    alignSelf: "stretch",
    minHeight: 50,
    minWidth: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "white",
  },
  backspace: {
    resizeMode: Platform.OS === "android" ? "center" : "contain",
    width: 20,
    height: 20,
  },
});

const LastRow = ({
  Left,
  Right,
  Center,
  onKeyPress,
  onBackSpace,
  BackSpaceComponent,
  textStyle,
  cellStyle,
  onLongBackSpace,
  lastRowStyle,
  backspaceTint,
}: LastRowType) => (
  <View style={[styles.row, lastRowStyle]}>
    {Left ? (
      Left
    ) : (
      <TouchableOpacity onPress={() => onKeyPress(".")}>
        <View style={[styles.cell, cellStyle]}>
          <Text style={[styles.text, textStyle]}>.</Text>
        </View>
      </TouchableOpacity>
    )}
    {Center ? (
      Center
    ) : (
      <TouchableOpacity onPress={() => onKeyPress("0")}>
        <View style={[styles.cell, cellStyle]}>
          <Text style={[styles.text, textStyle]}>0</Text>
        </View>
      </TouchableOpacity>
    )}
    {Right ? (
      Right
    ) : (
      <TouchableOpacity onLongPress={onLongBackSpace} onPress={onBackSpace}>
        {BackSpaceComponent ? (
          <View style={[styles.cell, cellStyle]}>{BackSpaceComponent}</View>
        ) : (
          <View style={[styles.cell, cellStyle]}>
            <Image
              resizeMode={Platform.OS === "android" ? "center" : "contain"}
              style={[
                styles.backspace,
                {
                  tintColor: backspaceTint ? backspaceTint : "black",
                },
              ]}
              source={require("./backspace.png")}
            />
          </View>
        )}
      </TouchableOpacity>
    )}
  </View>
);

const Row = ({
  chars,
  rowStyle,
  onKeyPress,
  cellStyle,
  textStyle,
}: RowType) => (
  <View style={[styles.row, rowStyle]}>
    {chars.map((char: string | number, index: number) => {
      return (
        <Cell
          key={index}
          textStyle={textStyle}
          cellStyle={cellStyle}
          onKeyPress={onKeyPress}
          char={char}
        />
      );
    })}
  </View>
);

const Cell = ({
  char,
  onPress,
  textStyle,
  cellStyle,
  onKeyPress,
}: CellType) => (
  <TouchableOpacity onPress={() => onKeyPress(`${char}`)}>
    <View style={[styles.cell, cellStyle]}>
      <Text style={[styles.text, textStyle]}>{`${char}`}</Text>
    </View>
  </TouchableOpacity>
);
export default RNScreenKeyboard;
