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
        <View style={{ flex: 1, justifyContent: "flex-start" }} />
        <Image source={require("../image/logo.png")} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(32, 53, 70)",
    flex: 1,
    flexDirection: "column"
  },
  logoContainer: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center"
  },
  logo: {
    height: 100,
    width: 100
  }
});
