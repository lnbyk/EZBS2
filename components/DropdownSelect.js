import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import InputBox from "../components/InputBox";
import InputHintText from "../components/InputHintText";
import names from "../constants/names";
const lists = [1, 2, 3, 4, 5, 6];

/*







*/
const DropdownSelect = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const openDropdown = () => {
    setShowDropdown((cur) => !cur);
  };

  const selectValue = (value) => {
    setSelectedValue(value);
    setShowDropdown(false);
  };

  const listItem = (itemdata) => {
    return (
      <TouchableOpacity onPress={selectValue.bind(this, itemdata.item)}>
        <View style={styles.inputBox}>
          <Text style={styles.text}> {itemdata.item}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputBox}>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={styles.text}>
            {selectedValue === "" ? "Select" : selectedValue}
          </Text>
        </View>

        <TouchableOpacity onPress={openDropdown} style={styles.arrow}>
          <Icon name="angle-down" size={25} color="black" type="AntDesign" />
        </TouchableOpacity>
      </View>
      {showDropdown ? (
        <View style={styles.dropDownContainer}>
          <FlatList
            data={names.states}
            keyExtractor={(data) => data}
            renderItem={listItem}
          />
        </View>
      ) : null}

      <View style={styles.row}>
        <InputHintText>Please enter zipcode</InputHintText>
        <InputBox placeholder="XXXXXXXXX"></InputBox>
      </View>
      <View style={styles.row}>
        <InputHintText>Please enter your company name</InputHintText>
        <InputBox placeholder="XXXXXXXXX"></InputBox>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    paddingVertical: Dimensions.get("window").height * 0.2,
  },
  inputBox: {
    flexDirection: "row",
    height: 50,
    width: Dimensions.get("window").width * 0.755,
    borderColor: "grey",
    backgroundColor: "rgb(227, 226, 226)",
    borderWidth: 1,
    justifyContent: "center",
    borderRadius: 5,
    marginBottom: 2,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "grey",
    flexDirection: "row",
  },
  arrow: {
    justifyContent: "center",
    right: "4%",
    position: "absolute",
  },
  dropDownContainer: {
    maxHeight: 155,
  },
  row: {
    marginVertical: 20,
    alignItems: "center",
  },
});

export default DropdownSelect;
