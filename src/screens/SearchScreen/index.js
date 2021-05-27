import React, { useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import styles from './styles';

const SearchScreen = (props) => {

    const [originPlace, setOriginPlace] = useState(null)
    const [destinationPlace, setDestinationPlace] = useState(null)

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <GooglePlacesAutocomplete
                    placeholder='From'
                    onPress={(data, details = null) => {
                        setOriginPlace({ data, details });
                        console.log(data, details);
                    }}
                    fetchDetails
                    style={{
                        textInput: styles.textInput,
                    }}
                    query={{
                        key: 'AIzaSyARebOMMqJHc4vaZiZPfHatfk4RWSGaAWM',
                        language: 'en',
                    }}
                    
                />

                <GooglePlacesAutocomplete
                    placeholder='Where to'
                    onPress={(data, details = null) => {
                        setDestinationPlace({ data, details });
                        console.log(data, details);
                    }}
                    fetchDetails
                    style={{
                        textInput: styles.textInput,
                    }}
                    query={{
                        key: 'AIzaSyARebOMMqJHc4vaZiZPfHatfk4RWSGaAWM',
                        language: 'en',
                    }}
                />
            </View>
        </SafeAreaView>

    )
}

export default SearchScreen;