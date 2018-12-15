import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  StatusBar,
  TextInput,
  SafeAreaView,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="rgb(32, 53, 70)" />
        <Image style={styles.image} source={require("../image/logo.png")} />
        <Text style={styles.text}> Give you choice </Text>
        <View style={styles.infoContainer} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(32, 53, 70)",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    height: 100,
    width: 100
  },
  text: {
    color: "#ffffff",
    fontSize: 18,
    textAlign: "center",
    marginTop: 5,
    opacity: 0.9
  },
  infoContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
    padding: 20,
    backgroundColor: "red"
  }
});
