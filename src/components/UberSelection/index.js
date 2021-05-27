import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';

import UberRow from '../UberRow';
import typesData from '../../assets/data/types';

const UberSelection = (props) => {
    const confirm = () => {
        console.warn('confirmed')
    }

    return (
        <View>

            {typesData.map(type => <UberRow type={type} />)}

            <Pressable
                onPress={confirm}
                style={{
                    backgroundColor: '#333',
                    padding: 10,
                    margin: 10,
                    alignItems: 'center',
                }}>
                <Text
                    style={{
                        color: '#fff',
                        fontWeight: 'bold',
                    }}>
                    Confirm Uber
                </Text>
            </Pressable>
        </View>
    )
}

export default UberSelection;