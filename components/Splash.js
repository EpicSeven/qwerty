import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image
} from "react-native";
export default class splash extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#3E637B" />
        <Image style={styles.image} source={require("../image/logo.png")} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3E637B",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black"
  },
  image: {
    height: 100,
    width: 100
  }
});
