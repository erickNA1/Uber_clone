import React from 'react';
import { View, Dimensions } from 'react-native';

import HomeMap from '../../components/homeMap/index';
import CovidMessage from '../../components/covidMessage';
import HomeSearch from '../../components/HomeSearch'

const homeScreen = (props) => {
    return (
        <View>
            <View style={{height:Dimensions.get('window').height - 400}}>
                <HomeMap />
            </View>
            

            {/*  Covid Message*/}
            
            <CovidMessage />
            
            {/*  Bottom Navigation*/}

            <HomeSearch />

        </View>
    );
};

export default homeScreen;

