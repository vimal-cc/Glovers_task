import {View, Text, StatusBar, Image, StyleSheet, FlatList} from 'react-native';
import React from 'react';

const eventsData = [
  {
    id: '1',
    day: 'TUE',
    date: '03',
    status: 'COMPLETED',
    time: '9:15 AM',
    team1: {
      name: 'Chicago Cubs',
      image: require('../assets/images/Splash.jpeg'),
    },
    team2: {
      name: 'RED SCX',
      image: require('../assets/images/red.jpg'),
    },
  },
  {
    id: '2',
    day: 'TUE',
    date: '03',
    status: 'COMPLETED',
    time: '2:45 PM',
    team1: {
      name: 'Chicago Cubs',
      image: require('../assets/images/Splash.jpeg'),
    },
    team2: {
      name: 'RED SCX',
      image: require('../assets/images/red.jpg'),
    },
  },
  {
    id: '3',
    day: 'WED',
    date: '04',
    status: 'COMPLETED',
    time: '9:41 AM',
    team1: {
      name: 'Chicago Cubs',
      image: require('../assets/images/Splash.jpeg'),
    },
    team2: {
      name: 'RED SCX',
      image: require('../assets/images/red.jpg'),
    },
  },
  {
    id: '4',
    day: 'THU',
    date: '05',
    status: 'COMPLETED',
    time: '9:30 AM',
    team1: {
      name: 'Milwaukee\nBrewers',
      image: require('../assets/images/img.png'),
    },
    team2: {
      name: 'SK',
      image: require('../assets/images/Splash.jpeg'),
    },
  },
  {
    id: '5',
    day: 'FRI',
    date: '06',
    status: 'COMPLETED',
    time: '9:41 AM',
    team1: {
      name: 'Milwaukee\nBrewers',
      image: require('../assets/images/img.png'),
    },
    team2: {
      name: 'SK',
      image: require('../assets/images/Splash.jpeg'),
    },
  },
  {
    id: '6',
    day: 'SAT',
    date: '06',
    status: 'COMPLETED',
    time: '02:51 AM',
    team1: {
      name: 'Milwaukee\nBrewers',
      image: require('../assets/images/img.png'),
    },
    team2: {
      name: 'SK',
      image: require('../assets/images/Splash.jpeg'),
    },
  },
  {
    id: '7',
    day: 'MON',
    date: '08',
    status: 'COMPLETED',
    time: '9.15 AM',
    team1: {
      name: 'Chicago Cubs',
      image: require('../assets/images/Splash.jpeg'),
    },
    team2: {
      name: 'RED SCX',
      image: require('../assets/images/red.jpg'),
    },
  },
  {
    id: '8',
    day: 'TUE',
    date: '09',
    status: 'COMPLETED',
    time: '9.15 AM',
    team1: {
      name: 'Chicago Cubs',
      image: require('../assets/images/Splash.jpeg'),
    },
    team2: {
      name: 'RED SCX',
      image: require('../assets/images/red.jpg'),
    },
  },
  {
    id: '9',
    day: 'TUE',
    date: '09',
    status: 'COMPLETED',
    time: '12.15 PM',
    team1: {
      name: 'Chicago Cubs',
      image: require('../assets/images/Splash.jpeg'),
    },
    team2: {
      name: 'RED SCX',
      image: require('../assets/images/Splash.jpeg'),
    },
  },
];

const EventsScreen = () => {
  const renderEventItem = ({item}: any) => (
    <View style={{paddingHorizontal: 25}}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.dateday}>
          <Text style={styles.date}>{item.day}</Text>
          <Text style={styles.day}>{item.date}</Text>
        </View>
        <View style={{paddingStart: 18}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#008000', fontWeight: '600'}}>
              {item.status}
            </Text>
            <Text style={{paddingStart: 40, color: '#000'}}>{item.time}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingTop: 15,
            }}>
            <View style={styles.natimage}>
              <Image
                source={item.team1.image}
                style={{width: 25, height: 25, borderRadius: 20}}
              />
              <Text style={styles.txt}>{item.team1.name}</Text>
            </View>
            <Text
              style={{
                paddingHorizontal: 10,
                color: '#ff1400',
                fontWeight: '500',
                fontSize: 15,
              }}>
              Vs.
            </Text>
            <View style={styles.natimage}>
              <Image
                source={item.team2.image}
                style={{width: 25, height: 25, borderRadius: 20}}
              />
              <Text style={styles.txt}>{item.team2.name}</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: '#d9d9d9',
          borderBottomWidth: 1,
          marginVertical: 15,
          marginStart: 70,
        }}></View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 25,
        }}>
        <View>
          <Text style={styles.Events}>Events</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../assets/images/search_big.png')}
            style={[styles.logo, {marginHorizontal: 20}]}
          />
          <Image
            source={require('../assets/images/notification_bell.png')}
            style={styles.logo}
          />
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#f5f5f5',
          paddingVertical: 12,
          marginTop: 10,
          marginBottom: 25,
        }}>
        <Text style={styles.oct_text}>October 2023</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={eventsData}
        keyExtractor={item => item.id}
        renderItem={renderEventItem}
      />
      <View
        style={{
          alignItems: 'flex-end',
          marginRight: 20,
        }}>
        <Image
          source={require('../assets/images/round_add.png')}
          style={{
            width: 55,
            height: 55,
            position: 'absolute',
            bottom: 20,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
    backgroundColor: 'white',
  },
  Events: {
    fontSize: 25,
    fontWeight: '600',
    color: 'black',
    letterSpacing: 1,
  },
  logo: {
    width: 25,
    height: 30,
    resizeMode: 'contain',
  },
  head: {
    fontSize: 20,
    fontWeight: '600',
    paddingVertical: 25,
    color: 'black',
  },
  oct_text: {
    paddingStart: 25,
    fontSize: 18,
    color: '#000',
    fontWeight: '500',
  },
  dateday: {
    flexDirection: 'column',
    paddingTop: 10,
    backgroundColor: '#f3f3f3',
    borderRadius: 8,
    height: 60,
    width: 50,
  },
  date: {
    color: '#000',
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
  day: {
    paddingTop: 5,
    textAlign: 'center',
    color: '#000',
    fontWeight: '600',
    fontSize: 16,
  },
  natimage: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txt: {
    color: 'black',
    fontWeight: '500',
    fontSize: 17,
    paddingStart: 6,
  },
});
export default EventsScreen;
