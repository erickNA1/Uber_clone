import React from 'react';
import { View, Text, Image, ImageStore } from 'react-native';
import styles from './styles';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { TSTYPEELEMENT_TYPES } from '@babel/types';

const UberRow = (props) => {
    const { type } = props;

    const getImages = () => {
        if (type.type === 'UberX') {
            return require('../../assets/images/UberX.jpeg');
        }
        if (type.type === 'Comfort') {
            return require('../../assets/images/Comfort.jpeg');
        }
        return require('../../assets/images/UberXL.jpeg');
    }

    return (
        <View style={styles.container}>
            {/* Image */}
            <Image
                style={styles.image}
                source={getImages()}
            />

            <View style={styles.middleText}>
                <Text style={styles.title}>
                    {type.type}{' '}
                    <Ionicons name={'person'} size={16} />
                    3
                </Text>

                <Text style={styles.time}>
                    8:03PM drop off
                </Text>
            </View>

            <View style={styles.priceContainer}>
                <Ionicons name={'pricetag'} size={16} color={'#42d742'} />
                <Text style={styles.total}>est. ${type.price}</Text>
            </View>
        </View>
    )
}

export default UberRow;