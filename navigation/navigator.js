import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import EntryScreen from "../screens/EntryScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScrren from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import DropdownSelect from '../components/DropdownSelect';

const MealsNavigator = createStackNavigator({
  //DropdownSelect:DropdownSelect,
  Entry: EntryScreen,
  Login: LoginScreen,
  SignUp: SignUpScrren
});

export default createAppContainer(MealsNavigator);
