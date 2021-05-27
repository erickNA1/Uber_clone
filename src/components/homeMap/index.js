import React from 'react';
import { View, Text, ImageStore, Image } from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const HomeMap = (props) => {
    return (
        <MapView
            style={{ width: '100%', height: '100%' }}
            initialRegion={{
                latitude: -23.5766,
                longitude: -46.4097,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >
            <Marker
                coordinate={{ latitude: -23.5766, longitude: -46.4097 }}
            >
                <Image 
                style={{width: 60, height: 60, resizeMode: 'contain'}} 
                source={require('../../assets/images/top-Comfort.png')} />
            </Marker>
        </MapView>
    );
};

export default HomeMap;