import React, { Component } from 'react';
import { Platform, StyleSheet,Text,View,StatusBar} from 'react-native';
export default class splash extends Component {

    render(){
    return(
        <View style={styles.container}>
            <Text style= {styles.title} >Fuck you Tesla!</Text>
        </View>
    )
    }
}
const styles= StyleSheet.create({
    container: {
        backgroundColor: '#3E637B',
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
    },
    title:{
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black'

    }
    

})