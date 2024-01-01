import { View } from "react-native";
import Colors from "../../shared/Color";

export default function HorizontalLine() {
  return (
    <View>
      <View
        style={{ borderWidth: 0.3, marginTop: 10, borderColor: Colors.GRAY }}
      ></View>
    </View>
  );
}
