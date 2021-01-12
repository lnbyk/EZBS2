import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import TextNav from "../components/TextNav";
const EntryScreen = (props) => {
  const toLoginPage = () => {
    props.navigation.replace({ routeName: "Login" });
  };
  const toSignupPage = () => {
    props.navigation.navigate({ routeName: "SignUp" });
  };
  const forgetPassword = () => {
    props.navigation.navigate({ routeName: "forgetPassword" });
  };

  return (
    <View style={styles.screen}>
      <ImageBackground
        style={styles.imgBg}
        source={require("../assets/account_initial_background.png")}
      >
        <View style={{ ...styles.row, ...styles.logoContainer }}>
          <View>
            <Image source={require("../assets/Let's_get_you_in.png")} />
          </View>
        </View>
        <View style={{ ...styles.row, ...styles.entryContainer }}>
          <View>
            <TouchableOpacity onPress={toLoginPage}>
              <Text
                style={{
                  ...styles.title,
                  marginLeft: Dimensions.get("window").width * 0.52,
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={toSignupPage}>
              <Text
                style={{
                  ...styles.title,
                  marginLeft: Dimensions.get("window").width * 0.3,
                }}
              >
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
          <TextNav onPress={forgetPassword}>
            <Text>Forget your Account?</Text>
            <Text>Click here</Text>
          </TextNav>
        </View>
      </ImageBackground>
    </View>
  );
};

EntryScreen.navigationOptions = {
  headerShown: false,
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginBottom: 60,
  },
  row: {
    flex: 1,
  },
  imgBg: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 40,
  },
  forgetAccount: {
    alignItems: "center",
  },
  entryContainer: {
    justifyContent: "space-evenly",
    paddingBottom: Dimensions.get("window").height * 0.05,
  },
});

export default EntryScreen;
