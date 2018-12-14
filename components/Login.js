import React, { Component } from 'react';
import { Platform, StyleSheet,Text,View,StatusBar,Image, TouchableNativeFeedback, TextInput,SafeAreaView,Keyboard, TouchableOpacity,KeyboardAvoidingView} from 'react-native';

export default class Login extends Component {
    render (){
       return(
       <View style={styles.containers}>
            <StatusBar 
            barStyle= 'light-content'
            backgroundColor= '#3E637B'> </StatusBar>
        </View>
        )

    }

}
const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#3E637B',
        flex: 1,
        flexDirection: 'column',
    }

})