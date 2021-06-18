/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { SearchBar } from 'react-native-elements';

const App: () => Node = () => {
  [searchText, setSearchText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        placeholder='Team, performer or venue'
        onChangeText={setSearchText}
        value={searchText}
        round={true}
        containerStyle={{backgroundColor:'transparent'}}
      />
      <Text>text</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default App;
