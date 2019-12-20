import styles from './styles';
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class LoginScreen extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>This is Login Screen</Text>
            </View>
        )
    }
}

export default LoginScreen; 