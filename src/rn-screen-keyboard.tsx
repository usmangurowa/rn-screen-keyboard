import React from "react";
import { View, Text, Image, Platform, Pressable } from "react-native";
import { CellProps, FooterProps, ScreenKeyboardProps, RowProps } from "./types";
import styles, { default_ripple_color } from "./styles";

const rows: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const RNScreenKeyboard = ({
  value = "",
  onKeyPress,
  textStyle,
  cellStyle,
  rowStyle,
  BackSpaceComponent,
  footerStyle,
  Left,
  Right,
  Center,
  backspaceTint,
  textLength = 0,
  Footer,
  ripple = true,
  ripple_color
}: ScreenKeyboardProps) => {
  const handleKeyPress = React.useCallback(
    (key: string) => {
      if (textLength > 0) {
        if (!(value.toString().length >= textLength)) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          onKeyPress((value += key));
        }
      } else {
        onKeyPress((value += key));
      }
    },
    [value, textLength]
  );
  const handleBackSpace = React.useCallback(() => {
    onKeyPress(value.toString().substring(0, value.toString().length - 1));
  }, [onKeyPress, value]);

  const handleClear = React.useCallback(() => {
    onKeyPress("");
  }, [onKeyPress]);
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
            ripple={ripple}
            ripple_color={ripple_color}
          />
        );
      })}
      {Footer ? (
        Footer
      ) : (
        <FooterRow
          cellStyle={cellStyle}
          textStyle={textStyle}
          BackSpaceComponent={BackSpaceComponent}
          onKeyPress={handleKeyPress}
          onBackSpace={handleBackSpace}
          onLongBackSpace={handleClear}
          footerStyle={footerStyle}
          Left={Left}
          Right={Right}
          Center={Center}
          backspaceTint={backspaceTint}
          ripple={ripple}
          ripple_color={ripple_color}
        />
      )}
    </View>
  );
};

const FooterRow = ({
  Left,
  Right,
  Center,
  onKeyPress,
  onBackSpace,
  BackSpaceComponent,
  textStyle,
  cellStyle,
  onLongBackSpace,
  footerStyle,
  backspaceTint,
  ripple,
  ripple_color = ""
}: FooterProps) => (
  <View style={[styles.row, footerStyle]}>
    {Left ? (
      Left
    ) : (
      <Cell
        textStyle={textStyle}
        cellStyle={cellStyle}
        onKeyPress={onKeyPress}
        char={"."}
      />
    )}
    {Center ? (
      Center
    ) : (
      <Cell
        textStyle={textStyle}
        cellStyle={cellStyle}
        onKeyPress={onKeyPress}
        char={"0"}
      />
    )}
    {Right ? (
      Right
    ) : (
      <Pressable
        onLongPress={onLongBackSpace}
        onPress={onBackSpace}
        {...(ripple && {
          android_ripple: { color: ripple_color.trim() || default_ripple_color }
        })}
      >
        {BackSpaceComponent ? (
          <View style={[styles.cell, cellStyle]}>{BackSpaceComponent}</View>
        ) : (
          <View style={[styles.cell, cellStyle]}>
            <Image
              resizeMode={Platform.OS === "android" ? "center" : "contain"}
              style={[
                styles.backspace,
                {
                  tintColor: backspaceTint ? backspaceTint : "black"
                }
              ]}
              source={require("./backspace.png")}
            />
          </View>
        )}
      </Pressable>
    )}
  </View>
);

const Row = ({
  chars,
  rowStyle,
  onKeyPress,
  cellStyle,
  textStyle,
  ripple,
  ripple_color = ""
}: RowProps) => (
  <View style={[styles.row, rowStyle]}>
    {chars.map((char: string | number, index: number) => {
      return (
        <Cell
          key={index}
          textStyle={textStyle}
          cellStyle={cellStyle}
          onKeyPress={onKeyPress}
          char={char}
          ripple={ripple}
          ripple_color={ripple_color}
        />
      );
    })}
  </View>
);

const Cell = ({
  char,
  textStyle,
  cellStyle,
  onKeyPress,
  ripple,
  ripple_color = ""
}: CellProps) => (
  <Pressable
    onPress={() => onKeyPress(`${char}`)}
    style={[styles.cell, cellStyle]}
    {...(ripple && {
      android_ripple: { color: ripple_color.trim() || default_ripple_color }
    })}
  >
    <Text style={[styles.text, textStyle]}>{`${char}`}</Text>
  </Pressable>
);
export default RNScreenKeyboard;
