import React from "react";
import { TextStyle, ViewStyle } from "react-native";

type GlobalType = {
  Center?: React.ReactNode;
  cellStyle?: ViewStyle;
  footerStyle?: ViewStyle;
  Left?: React.ReactNode;
  textStyle?: TextStyle;
  rowStyle?: ViewStyle;
  Right?: React.ReactNode;
  backspaceTint?: string;
  onKeyPress: (key: string) => void;
  textLength?: number;
  ripple?: boolean;
  ripple_color?: string;
};

export interface ScreenKeyboardProps extends GlobalType {
  value: string | number;
  BackSpaceComponent?: React.ReactNode;
  Footer?: React.ReactNode;
}

export interface FooterProps extends GlobalType {
  onBackSpace?(): void;
  onLongBackSpace?(): void;
  BackSpaceComponent?: React.ReactNode;
}

export interface RowProps extends GlobalType {
  chars: string[] | number[];
}

export interface CellProps extends GlobalType {
  char: string | number | React.ReactNode;
  onPress?(): void;
}
