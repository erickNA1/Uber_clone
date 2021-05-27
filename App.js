/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './src/screens/homeScreen';
import SearchScreen from './src/screens/SearchScreen';
import SearchResult from './src/screens/SearchResult';

const App: () => Node = () => {
  return (
    <>
      <StatusBar barStyle='white-content' />
      <SearchResult />
    </>
  );
};

const styles = StyleSheet.create({
});

export default App;
