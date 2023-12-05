import React, { useEffect, useState }from 'react';
import {View, Text, StatusBar, Image, StyleSheet, FlatList} from 'react-native';
import  {useGetLiveMatchListQuery} from '../redux/services/AuthService'

const data = [
  {
    id: '1',
    place: 'Salt Lake City, UT, USA',
    teams: [
      {
        id: '1',
        teamName: 'Milwaukee Brewers',
        logo: require('../assets/images/Splash.jpeg'),
        score: '0',
      },
      {
        id: '2',
        teamName: 'SK',
        logo: require('../assets/images/Splash.jpeg'),
        score: '0',
      },
    ],
  },
];

const SplashScreen = () => (
  <View style={styles.splashContainer}>
    <Image
      source={require('../assets/images/spinning_gif.gif')}
      style={{ width: 50, height: 50 }}
    />
  </View>
);

const LiveScreen = () => {
  const { data: liveMatchList, error, refetch } = useGetLiveMatchListQuery({});
  useEffect(() => {
    refetch();
  }, []);
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setShowSplash(false);
    }, 500); 
    return () => clearTimeout(splashTimeout);
  }, []);
  const renderItem = ({item}: any) => (
    <View>
      <View style={styles.box}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.baseballcontainer}>
              <Image
                source={require('../assets/images/baseballImg.png')}
                style={{width: 38, height: 38, resizeMode: 'cover'}}
              />
            </View>
            <View style={styles.natimage}>
              <Image
                source={require('../assets/images/locationMarkIcon.png')}
                style={{width: 25, height: 25, resizeMode: 'contain'}}
              />
              <Text style={styles.place}>{item.place}</Text>
            </View>
          </View>
          <View
            style={{
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              paddingEnd: 20,
            }}>
            <Text style={{color: '#bc3f3d', fontWeight: '600'}}>Today</Text>
            <Text style={{color: '#bc3f3d', fontWeight: '600'}}>10:41 AM</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingBottom: 25,
            paddingStart: 5,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <FlatList
              data={item.teams}
              keyExtractor={team => team.id}
              renderItem={({item: team}) => (
                <View style={[styles.container1, {paddingTop: 20}]}>
                  <View style={styles.natimage}>
                    <Image source={team.logo} style={styles.img} />
                    <Text style={[styles.txt, {paddingStart: 20}]}>
                      {team.teamName}
                    </Text>
                  </View>
                  <Text style={styles.number}>{team.score}</Text>
                </View>
              )}
            />
          </View>
          <View style={{alignItems: 'center', paddingEnd: 15}}>
            <Image
              source={require('../assets/images/trilogo.png')}
              style={{width: 55, height: 35, resizeMode: 'stretch'}}
            />
            <Text style={{color: 'black', fontWeight: '600'}}>0-0 , 0 out</Text>
          </View>
        </View>
      </View>
    </View>
  );
  return (
    <View style={{flex: 1, padding: 25, backgroundColor: 'white'}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text style={styles.home}>Live</Text>
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
      {showSplash ? (
        <SplashScreen />
      ) : (
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    backgroundColor: 'white',
  },
  home: {
    paddingVertical: 25,
    fontSize: 25,
    fontWeight: '600',
    color: 'black',
    letterSpacing: 1,
  },
  tab: {
    flexDirection: 'row',
    borderWidth: 2,
    marginHorizontal: 44,
    borderRadius: 30,
    borderColor: '#005dab',
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
  box: {
    borderWidth: 0.5,
    borderColor: '#cccccc',
    borderRadius: 15,
  },
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  baseballcontainer: {
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    borderBottomEndRadius: 26,
    backgroundColor: '#005dab',
    padding: 8,
    width: 55,
  },
  img1: {
    width: 25,
    height: 25,
    resizeMode: 'cover',
    marginHorizontal: 8,
  },
  place: {
    color: 'black',
    paddingStart: 5,
    fontWeight: '600',
    fontSize: 15,
  },
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  natimage: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingStart: 15,
  },
  txt: {
    color: 'black',
    fontWeight: '500',
    fontSize: 18,
    paddingStart: 10,
  },
  number: {
    color: 'black',
    paddingStart: 10,
    fontSize: 25,
    fontWeight: '600',
  },
  img: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    borderRadius: 20,
  },
});

export default LiveScreen;
