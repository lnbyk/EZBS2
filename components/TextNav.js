import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

const TextNav = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.forgetAccount}>{props.children}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  forgetAccount: {
    marginVertical :30,
    alignItems: "center",
  },
});

export default TextNav;
