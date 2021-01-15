import React, { useEffect, useState } from "react";
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
props
  options - used to render select options
  placeholder - used to render default select
  onPress - used to select value

*/
const DropdownSelect = (props) => {
  console.log(props.navigation);
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

  const { onInputChange, id } = props;

  useEffect(() => {
    onInputChange(id, selectedValue, true);
  }, [id, selectedValue, onInputChange]);

  return (
    <View style={{ marginVertical: 20 }}>
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
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default DropdownSelect;
