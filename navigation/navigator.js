import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator} from "react-navigation";

import EntryScreen from "../screens/EntryScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScrren from "../screens/SignUpScreen";
import HomeScreen from "../screens/HomeScreen";
import DropdownSelect from "../components/DropdownSelect";
import LinkCompanyScreen from "../screens/LinkCompanyScreen";

const AuthNavigator = createStackNavigator({
  //DropdownSelect:DropdownSelect,
  Entry: EntryScreen,
  Login: LoginScreen,
  SignUp: SignUpScrren,
});

const ShopNavigator = createStackNavigator({
  LinkCompany: LinkCompanyScreen,
});

const MainNavigator = createSwitchNavigator({
  Shop: ShopNavigator,
  Auth: AuthNavigator,

});
export default createAppContainer(MainNavigator);
