import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

import MaterialIcons from "react-native-vector-icons/MaterialIcons"

const CovidMessage = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Travel only if necessary </Text>
            <Text style={styles.text}>
                If you are a beginner that wants to learn javascript and react-native or an advanced javascript developer that wants to get into mobile.
            </Text>
            <View style={styles.learnContainer}>
                <Text style={styles.learnMore}>Learn more </Text>
                <MaterialIcons name={"keyboard-arrow-right"} size={16.5} color={'#fff'} style={{marginBottom: 7,}} />
            </View>
        </View>
    )
}

export default CovidMessage;