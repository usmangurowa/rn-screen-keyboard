import React from "react";
import { TextStyle, ViewStyle } from "react-native";

type GlobalType = {
  Center?: React.ReactNode;
  cellStyle?: ViewStyle;
  lastRowStyle?: ViewStyle;
  Left?: React.ReactNode;
  textStyle?: TextStyle;
  rowStyle?: ViewStyle;
  Right?: React.ReactNode;
  backspaceTint?: string;
  onKeyPress: (key: string) => void;
};

export interface RNScreenKeyboardType extends GlobalType {
  value: string | number;
  BackSpaceComponent?: React.ReactNode;
}

export interface LastRowType extends GlobalType {
  onBackSpace?(): void;
  onLongBackSpace?(): void;
  BackSpaceComponent?: React.ReactNode;
}

export interface RowType extends GlobalType {
  chars: string[] | number[];
}

export interface CellType extends GlobalType {
  char: string | number | React.ReactNode;
  onPress?(): void | any;
}
