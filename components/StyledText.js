import React from "react";
import { Text } from "react-native";

export function MonoText(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "space-mono" }]} />
  );
}

export function AbrilText(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "abril-fatface" }]} />
  );
}
