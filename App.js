import { StatusBar } from "expo-status-bar";
import React from "react";
import { enableScreens } from "react-native-screens";
import MealsNavigator from "./navigation/navigator";
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";

import mealsReducer from "./store/reducers/auth";
enableScreens();

// use to combine multi reducers

const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}
