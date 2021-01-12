import React, { useState } from "react";
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
import Colors from "../constants/Colors";

const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const forgetPassword = () => {
    props.navigation.replace({ routeName: "forgetPassword" });
  };

  const toSignupPage = () => {
    props.navigation.replace({ routeName: "SignUp" });
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
        <Image source={require("../assets/login_logo.png")} />
      </View>

      <View style={styles.row}>
        <InputHintText>Please enter your email</InputHintText>
        <InputBox
          value={email}
          onChangeText={changeEmail}
          placeholder="join@example.com"
        />
      </View>
      <View style={styles.row}>
        <InputHintText>Please enter your password</InputHintText>
        <InputBox
          value={password}
          onChangeText={changePassword}
          placeholder="john123456"
        />
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
  );
};

LoginScreen.navigationOptions = {
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
});

export default LoginScreen;
