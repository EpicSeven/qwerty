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
      // <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="rgb(32, 53, 70)" />
        <Image style={styles.logo} source={require("../image/logo.png")} />
        <Text style={styles.text}> Give you choice </Text>
        <View style={styles.infoContainer}>
          <TextInput
            style={styles.input}
            placeholder="Login"
            placeholderTextColor="white"
            keyboardType="email-address"
            returnKeyType="next"
          />
        </View>
      </View>
      // </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "rgb(32, 53, 70)"

    //alignItems: "center",
    //justifyContent: "center"
  },
  logo: {
    flexDirection: "column",
    //flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
    padding: 20
    // backgroundColor: "red"
  },
  input: {
    height: 40,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
