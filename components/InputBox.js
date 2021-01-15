import React, { useReducer, useEffect } from "react";
import { TextInput, StyleSheet, Dimensions, View, Text } from "react-native";

const INPUT_CHANGE = "INPUT_CHANGE";
const INPUT_BLUR = "INPUT_BLUR";

const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        value: action.value,
        isValid: action.isValid,
      };
    case INPUT_BLUR:
      return {
        ...state,
        touched: true,
      };
    default:
      return state;
  }
};

const InputBox = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue ? props.initialValue : "",
    isValid: props.initiallyValid,
    touched: false,
  });

  const { onInputChange, id } = props;

  useEffect(() => {
    if (inputState.touched) {
      onInputChange(id, inputState.value, inputState.isValid);
    }
  }, [inputState, onInputChange, id, onInputChange]);

  const textChangeHandler = (text) => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = true;
    if (props.required && text.trim().length === 0) {
      isValid = false;
    }
    if (props.email && !emailRegex.test(text.toLowerCase())) {
      isValid = false;
    }
    if (props.min != null && +text < props.min) {
      isValid = false;
    }
    if (props.max != null && +text > props.max) {
      isValid = false;
    }
    if (props.minLength != null && text.length < props.minLength) {
      isValid = false;
    }
    if (props.zipcode && text.trim().length < 5) {
      isValid = false;
    }

    dispatch({ type: INPUT_CHANGE, value: text, isValid: isValid });
  };

  const lostFocusHandler = () => {
    dispatch({ type: INPUT_BLUR });
  };

  return (
    <View style={{ alignItems: "center" }}>
      <TextInput
        {...props}
        style={{ ...styles.inputBox, ...props.style }}
        value={inputState.value}
        onChangeText={textChangeHandler}
        onFocus={lostFocusHandler}
      ></TextInput>
      {!inputState.isValid && inputState.touched && (
        <Text style={styles.errorText}>{props.errorText}</Text>
      )}
    </View>
  );
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
  errorText: {
    fontFamily: "open-sans",
    color: "red",
    fontSize: 13,
  },
});

export default InputBox;
