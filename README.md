## rn-screen-keyboard

**A Customizable On-Screen Keyboard Component for React Native**

This React Native component provides a user-friendly on-screen keyboard for various input scenarios. It offers customization options for styling, layout, and behavior, allowing you to tailor it to your specific needs.

**Features:**

- Displays a standard numeric keyboard layout (rows 1-3, with 0 and a custom Backspace button in the footer).
- Supports custom input of characters for flexibility.
- Provides built-in Backspace functionality for single character deletion.
- Allows for optional Left, Center, and Right components in the footer for additional features.
- Includes customizable styling properties for cells, rows, and the overall keyboard.
- Integrates with React Native's `Pressable` component for touch handling and optional ripple effects on Android (requires `react-native-gesture-handler`).

**Installation:**

```bash
npm install rn-screen-keyboard
```

**Usage:**

```javascript
import RNScreenKeyboard from 'rn-screen-keyboard';
import {Text, View} from "react-native"

const MyComponent = () => {
  const [value, setValue] = useState('');

  const handleKeyPress = (data) => {
    setValue(data);
  };

  return (
    <View style={{ flex: 1 }}>
      <Text>{value}</Text>
      <RNScreenKeyboard
        value={value}
        onKeyPress={handleKeyPress}
        // Optional props for customization
        textStyle={{ fontSize: 20 }}
        cellStyle={{ backgroundColor: '#f0f0f0' }}
        BackSpaceComponent={<Text>DEL</Text>} // Custom Backspace component
        footerStyle={{ backgroundColor: '#e0e0e0' }}
        Left={<Text>.</Text>} // Custom left footer button
        Right={<Text>Done</Text>} // Custom right footer button
      />
    </View>
  );
};
```

**Props:**

| Prop Name           | Type                | Description                                          | Default Value |
|--------------------|----------------------|-------------------------------------------------------|----------------|
| `value`             | `string`             | The current value of the input field                 | ''             |
| `onKeyPress`        | `(key: string) => void` | Function to handle key press events                  | -              |
| `textStyle`        | `object`             | Styles applied to the text within each cell           | {}             |
| `cellStyle`         | `object`             | Styles applied to each individual cell (button)        | {}             |
| `rowStyle`          | `object`             | Styles applied to each row of cells                  | {}             |
| `BackSpaceComponent` | `React.ReactNode`     | Custom component to display for the Backspace button     | -              |
| `footerStyle`       | `object`             | Styles applied to the footer container                | {}             |
| `Left`              | `React.ReactNode`     | Custom content to display in the left footer cell      | -              |
| `Right`             | `React.ReactNode`     | Custom content to display in the right footer cell     | -              |
| `Center`            | `React.ReactNode`     | Custom content to display in the center footer cell     | -              |
| `backspaceTint`     | `string`             | Tint color for the Backspace icon (if not using a custom BackSpaceComponent) | 'black'        |
| `textLength`        | `number`             | (Optional) Maximum allowed length of the input string | 0 (unlimited) |
| `Footer`            | `React.ReactNode`     | (Optional) Custom component to replace the default footer | -              |
| `ripple`            | `boolean`            | (Optional) Enables a ripple effect on touch (Android)  | true            |
| `ripple_color`     | `string`             | (Optional) Color for the ripple effect                | default_ripple_color (defined in styles) |

**Customization:**

- You can further customize the appearance and behavior of the keyboard by overriding styles in your own stylesheet. Refer to the `styles.js` file for available style properties.
- The `ripple` prop allows you to enable an optional ripple effect on Android platforms for a more tactile user experience. This requires linking `react-native-gesture-handler`.
