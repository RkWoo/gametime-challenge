/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import {Section} from './Section';

const URL = 'https://mobile-staging.gametime.co/v1/search?q=';

function App() {
  const [searchText, setSearchText] = useState('');
  const [eventData, setEventData] = useState([]);
  const [performerData, setPerformerData] = useState([]);
  const [venueData, setVenueData] = useState([]);

  useEffect(() =>
    {
      if (searchText.length < 3) return;
      const uri = URL + searchText;
      fetch(uri)
          .then((response) => response.json())
          .then((json) =>
                {
                  setEventData(json.events.slice(0, 3));
                  setPerformerData(json.performers.slice(0, 3));
                  setVenueData(json.venues.slice(0, 3));
                })
          .catch((error) => console.error(`fetch error ${error}: ${uri}`))
          .finally(() => {});
    }, [ searchText ]);

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        placeholder='Team, performer or venue'
        onChangeText={setSearchText}
        value={searchText}
        round={true}
        containerStyle={{backgroundColor:'transparent'}}
      />
      <ScrollView style={{ flex: 1}}>
        <Section title='Events' data={eventData} />
        <Section title='Performers' data={performerData} />
        <Section title='Venues' data={venueData} />
      </ScrollView>
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
