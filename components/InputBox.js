import React from "react";
import { TextInput, StyleSheet, Dimensions } from "react-native";

const InputBox = (props) => {
  return <TextInput {...props} style={{...styles.inputBox, ...props.style}}></TextInput>;
};

const styles = StyleSheet.create({
  inputBox: {
    height: 50,
    width: Dimensions.get("window").width * 0.75,
    borderColor: "grey",
    backgroundColor: "rgb(227, 226, 226)",
    color: "grey",
    borderWidth: 1,
    textAlign: "center",
    fontSize: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
});

export default InputBox;
