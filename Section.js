
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
      const date = new Date(item.event.datetime_local);
      const dateStr = date.toLocaleDateString('en-us').split('/');
      const displayDate = dateStr[0] + '/' + dateStr[1];
      const day = date.toLocaleString('en-us', {weekday:'short'}).split(' ')[0];
      return (
        <View style={styles.dataContainer} key={index}>
          <View style={{width:60, height:60, alignItems:'center', justifyContent:'center'}}>
            <Text style={{color:'white', fontSize:20}}>{displayDate}</Text>
            <Text style={{color:'gray'}}>{day}</Text>
          </View>
          <View style={{marginLeft: 20}} >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>{item.event.name}</Text>
          </View>
        </View>
      );
    })
  );
}

function renderPerformers(data) {
  return (
    data.map((item, index) => {
      return (
        <View style={styles.dataContainer} key={index}>
          <Image
            source={{ uri: item.hero_image_url }}
            resizeMode='cover'
            style={styles.image} />
          <View style={{ marginLeft: 20 }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>{item.name}</Text>
            <Text style={{ color: 'white' }}>{item.category.toUpperCase()}</Text>
          </View>
        </View>
      );
    })
  );
}

function renderVenues(data) {
  return (
    data.map((item, index) => {
      return (
        <View style={styles.dataContainer} key={index}>
          <Image
            source={{ uri: item.image_url }}
            resizeMode='cover'
            style={styles.image} />
          <View style={{ marginLeft: 20 }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>{item.name}</Text>
            <Text style={{ color: 'white' }}>{`${item.city}, ${item.state}`}</Text>
          </View>
        </View>
      );
    })
  );
}

const styles = StyleSheet.create({
  dataContainer: {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#101010',
    alignItems: 'center',
  },
  sectionTitle: {
    width: '100%',
    backgroundColor: '#202020',
    fontWeight: 'bold',
    color: 'lightgray',
    padding: 20,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
    overflow: 'hidden',
  },
});
