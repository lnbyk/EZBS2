import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import EntryScreen from "../screens/EntryScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScrren from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';

const MealsNavigator = createStackNavigator({
  Entry: EntryScreen,
  Login: LoginScreen,
  SignUp: SignUpScrren
});

export default createAppContainer(MealsNavigator);
