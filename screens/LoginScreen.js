import React, { useReducer, useCallback, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
  Button,
  ActivityIndicator,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useDispatch } from "react-redux";
import InputHintText from "../components/InputHintText";
import InputBox from "../components/InputBox";
import TextNav from "../components/TextNav";
import Colors from "../constants/colors";

import * as authActions from "../store/actions/auth";

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

const LoginScreen = (props) => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: "",
      password: "",
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });

  const forgetPassword = () => {
    props.navigation.replace({ routeName: "forgetPassword" });
  };

  const toSignupPage = () => {
    props.navigation.replace({ routeName: "SignUp" });
  };

  useEffect(() => {
    if (error) {
      Alert.alert("An Error Occurred!", error, [{ text: "Okay" }]);
    }
  }, [error]);

  const dispatch = useDispatch();

  const loginHandler = async () => {
    let action;
    action = authActions.signup(
      formState.inputValues.email,
      formState.inputValues.password
    );

    setIsLoading(true);
    setError(null);
    try {
      await dispatch(action);
      props.navigation.navigate("LinkCompany");
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
    setIsLoading(false);
  };

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState]
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.screen}>
        <View style={styles.logoContainer}>
          <Image source={require("../assets/login_logo.png")} />
        </View>

        <View style={styles.row}>
          <InputHintText>Please enter your email</InputHintText>
          <InputBox
            id="email"
            label="E-Mail"
            keyboardType="email-address"
            required
            email
            autoCapitalize="none"
            errorText="Please enter a valid email address."
            onInputChange={inputChangeHandler}
            initialValue=""
          />
        </View>
        <View style={styles.row}>
          <InputHintText>Please enter your password</InputHintText>
          <InputBox
            id="password"
            label="Password"
            secureTextEntry
            password
            required
            minLength={5}
            autoCapitalize="none"
            errorText="Please enter a valid password."
            onInputChange={inputChangeHandler}
            initialValue=""
          />
        </View>
        <View style={styles.row}>
          {isLoading ? (
            <ActivityIndicator size="small" />
          ) : (
            <Button title="sign in" onPress={loginHandler} />
          )}
        </View>
        <TextNav onPress={forgetPassword}>
          <Text style={{ color: Colors.forgetPassword, marginVertical: 10 }}>
            Forget your Account?
          </Text>
          <Text style={{ color: Colors.forgetPassword }}>Click here</Text>
        </TextNav>
        <TextNav onPress={toSignupPage}>
          <Text style={{ marginVertical: 10 }}>Don't have account yet?</Text>
          <Text>Register now.</Text>
        </TextNav>
      </View>
    </TouchableWithoutFeedback>
  );
};

LoginScreen.navigationOptions = {
  headerShown: false,
  animationEnabled: false,
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Dimensions.get("window").height * 0.1,
  },
  row: {
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "flex-end",
  },
});

export default LoginScreen;
