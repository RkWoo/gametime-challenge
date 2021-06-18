
import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';

export function Section(props) {
  const { title, data } = props;
  let renderData;
  if (title === 'Events') {
    renderData = renderEvents(data);
  } else if (title === 'Performers') {
    renderData = renderPerformers(data);
  } else if (title === 'Venues') {
    renderData = renderVenues(data);
  }
  return (
    <View style={{ backgroundColor: '#101010', marginTop: 10 }}>
      <Text style={styles.sectionTitle}>{props.title}</Text>
      {renderData}
    </View>
  );
}

function renderEvents(data) {
  return (
    data.map((item, index) => {
      return (
        <Text style={{ color: 'white' }}>{item.event.name}</Text>
      );
    })
  );
}

function renderPerformers(data) {
  return (
    data.map((item, index) => {
      return (
        <Text style={{ color: 'white' }}>{item.name}</Text>
      );
    })
  );
}

function renderVenues(data) {
  return (
    data.map((item, index) => {
      return (
        <Text style={{ color: 'white' }}>{item.name}</Text>
      );
    })
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    width: '100%',
    backgroundColor: '#202020',
    fontWeight: 'bold',
    color: 'lightgray',
    padding: 20,
  },
});