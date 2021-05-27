import React from 'react';
import { View, Dimensions } from 'react-native';

import HomeMap from '../../components/homeMap';
import UberSelection from '../../components/UberSelection';



const SearchResult = (props) => {
    return (
        <View>
            <View style={{ height: Dimensions.get('window').height - 400 }}>
                <HomeMap />
            </View>

            <UberSelection />
        </View>
    )
}

export default SearchResult;