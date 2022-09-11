## React Native Screen Keyboard 

# Demo
<img src="https://github.com/usmangurowa/RNScreenKeyboard/blob/main/.github/demo.gif" height="500" />


React Native Screen Keyboard is a virutal screen keyboard implementation for React Native. It is fully customizable, the last row of the keys can be completely customized or changed to fit perfectly with your projects.

_**It support's Expo**_
## Installation 
#### npm

```sh
npm i rnscreenkeyboard
```
#### yarn

```sh
yarn add rnscreenkeyboard
```

## Example

```sh
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import RNScreenKeyboard from "rnscreenkeyboard";

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
          margin: 5,
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
    justifyContent: "center",
  },
  input: {
    padding: 10,
    backgroundColor: "#ddd",
    width: "50%",
    borderRadius: 20,
    fontSize: 20,
    letterSpacing: 20,
    textAlign: "center",
  },
});

```


<img src="https://github.com/usmangurowa/RNScreenKeyboard/blob/main/.github/example.jpg" height="500" />


# Props

| Name | Type | Default | Description |
| ------ | ------ | ------- | ----------- |
| cellStyle | ViewStyle | 
| textStyle | TextStyle |
| rowStyle | ViewStyle | 
| onKeyPress | func | 
| backspaceTint | string | black
| BackSpaceComponent | React.ReactNode | backspace image
| Left | React.ReactNode |
| Center | React.ReactNode |
| Right | React.ReactNode |


## License

MIT

MIT License

Copyright (c) 2022 Usman Hassan
