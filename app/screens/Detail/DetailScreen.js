import styles from './styles';
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class DetailScreen extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>This is Detail Screen</Text>
            </View>
        )
    }
}

export default DetailScreen; 