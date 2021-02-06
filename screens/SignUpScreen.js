import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
} from "react-native";
import InputHintText from "../components/InputHintText";
import InputBox from "../components/InputBox";
import TextNav from "../components/TextNav";
import Colors from "../constants/colors";

const SignUpScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmed, setPasswordConfirmed] = useState("");


  const toLoginPage = () => {
    props.navigation.replace({ routeName: "Login" });
  };

  const changePassword = (value) => {
    setPassword(value);
  };

  const changeEmail = (value) => {
    setEmail(value);
  };
  return (
    <View style={styles.screen}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/signup_logo.png")} />
      </View>

      <View style={styles.row}>
        <InputHintText>Please enter your email</InputHintText>
        <InputBox
          style={styles.inputBox}
          value={email}
          onChangeText={changeEmail}
          placeholder="join@example.com"
        />
      </View>
      <View style={styles.row}>
        <InputHintText>Please enter your password</InputHintText>
        <InputBox
          style={styles.inputBox}
          value={password}
          onChangeText={changePassword}
          placeholder="john123456"
        />
      </View>
      <View style={styles.row}>
        <InputHintText>Re-type your password</InputHintText>
        <InputBox
          style={styles.inputBox}
          value={passwordConfirmed}
          onChangeText={setPasswordConfirmed}
          placeholder="john123456"
        />
      </View>
      <TextNav onPress={toLoginPage}>
        <Text style={{ marginVertical: 10 }}>Already have an account?</Text>
        <Text>Login.</Text>
      </TextNav>
    </View>
  );
};

SignUpScreen.navigationOptions = {
  headerShown: false,
  animationEnabled: false
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
  inputBox: {
    width: Dimensions.get("window").width * 0.65,
  },
});

export default SignUpScreen;
