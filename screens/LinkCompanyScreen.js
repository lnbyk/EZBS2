import React, { useReducer, useCallback } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import DropdownSelect from "../components/DropdownSelect";
import InputHintText from "../components//InputHintText";
import InputBox from "../components/InputBox";

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    };
  }
  return state;
};

const LinkCompanyScreen = (props) => {
  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      zipcode: "",
      companyName: "",
      state: "",
    },
    inputValidities: {
      zipcode: false,
      companyName: false,
      state: false,
    },
    formIsValid: false,
  });

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
      console.log("error", formState);
    },
    [dispatchFormState]
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.screen}>
        <DropdownSelect
          id="state"
          label="Zipcode"
          onInputChange={inputChangeHandler}
        />

        <View style={styles.row}>
          <InputHintText>Please enter zipcode</InputHintText>
          <InputBox
            id="zipcode"
            label="Zipcode"
            placeholder="XXXXXXXXX"
            required
            zipcode
            keyboardType="numeric"
            errorText="Please enter a valid zipcode"
            onInputChange={inputChangeHandler}
            initialValue=""
          ></InputBox>
        </View>
        <View style={styles.row}>
          <InputHintText>Please enter your company name</InputHintText>
          <InputBox
            placeholder="XXXXXXXXX"
            id="companyName"
            label="companyName"
            placeholder="XXXXXXXXX"
            required
            zipcode
            keyboardType="default"
            errorText="Please enter a valid company Name"
            onInputChange={inputChangeHandler}
            initialValue=""
          ></InputBox>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    paddingVertical: Dimensions.get("window").height * 0.2,
  },
  row: {
    alignItems: "center",
  },
});

export default LinkCompanyScreen;
