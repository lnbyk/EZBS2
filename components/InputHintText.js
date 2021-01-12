import React from "react";
import { Text, StyleSheet } from "react-native";

const InputHintText = (props) => {
  return <Text style={styles.text}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 23,
    color: "rgb(209, 205, 199)",
    width:'100%',
    marginBottom:20,
    height: 25,
  },
});

export default InputHintText;
