import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useGetGameListQuery} from '../redux/services/AuthService';

const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState('allGames');
  const {
    data: gameListData,
    error: gameListError,
    isLoading: gameListLoading,
  } = useGetGameListQuery({
    limit: 10,
    offset: 0,
  });

  useEffect(() => {
    if (gameListError) {
      console.error('Error fetching game list:', gameListError);
    }
    if (gameListLoading) {
      console.log('Loading game list...');
    }
    if (gameListData) {
      console.log('Game list data:', gameListData);
    }
  }, [gameListData, gameListError, gameListLoading]);

  const renderContent = () => {
    if (selectedTab === 'allGames') {
      return (
        <View>
          <Text style={styles.head}>Today</Text>
          <View style={styles.box}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
                  <Text style={styles.place}>Salt Lake City, UT, USA</Text>
                </View>
              </View>
              <View
                style={{
                  alignItems: 'flex-end',
                  justifyContent: 'flex-end',
                  paddingEnd: 20,
                }}>
                <Text style={{color: '#bc3f3d', fontWeight: '600'}}>Today</Text>
                <Text style={{color: '#bc3f3d', fontWeight: '600'}}>
                  10:41 AM
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 30,
                paddingStart: 5,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <View style={styles.container1}>
                  <View style={styles.natimage}>
                    <Image
                      source={require('../assets/images/Splash.jpeg')}
                      style={styles.img}
                    />
                    <Text style={[styles.txt, {paddingStart: 20}]}>
                      Milwaukee Brewers
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.number}>0</Text>
                  </View>
                </View>
                <View style={[styles.container1, {paddingTop: 25}]}>
                  <View style={styles.natimage}>
                    <Image
                      source={require('../assets/images/Splash.jpeg')}
                      style={styles.img}
                    />
                    <Text style={[styles.txt, {paddingStart: 20}]}>SK</Text>
                  </View>
                  <View>
                    <Text style={styles.number}>0</Text>
                  </View>
                </View>
              </View>
              <View style={{alignItems: 'center', paddingEnd: 15}}>
                <Image
                  source={require('../assets/images/trilogo.png')}
                  style={{width: 55, height: 35, resizeMode: 'stretch'}}
                />
                <Text style={{color: 'black', fontWeight: '600'}}>
                  0-0 , 0 out
                </Text>
              </View>
            </View>
            <Text style={styles.startscoring}>Start Scoring</Text>
          </View>
        </View>
      );
    } else {
      return (
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <View>
            <Text style={styles.head}>Summer 2023</Text>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.box1}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={styles.baseballcontainer}>
                    <Image
                      source={require('../assets/images/baseballImg.png')}
                      style={{width: 38, height: 38, resizeMode: 'cover'}}
                    />
                  </View>
                  <Image
                    source={require('../assets/images/red_profile.png')}
                    style={styles.img1}
                  />
                  <Text style={styles.place}>COACH</Text>
                </View>
                <View style={[styles.natimage, {paddingStart: 15}]}>
                  <Image
                    source={require('../assets/images/Splash.jpeg')}
                    style={{width: 35, height: 35, borderRadius: 20}}
                  />
                  <Text style={[styles.txt, {padding: 10}]}>
                    Milwaukee {'\n'}Brewers
                  </Text>
                </View>
                <Text style={[styles.number, {textAlign: 'center'}]}>
                  1 - 0
                </Text>
              </View>
              <View style={styles.box1}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={styles.baseballcontainer}>
                    <Image
                      source={require('../assets/images/baseballImg.png')}
                      style={{width: 38, height: 38, resizeMode: 'cover'}}
                    />
                  </View>
                  <Image
                    source={require('../assets/images/red_profile.png')}
                    style={styles.img1}
                  />
                  <Text style={styles.place}>COACH</Text>
                </View>
                <View style={[styles.natimage, {paddingStart: 15}]}>
                  <Image
                    source={require('../assets/images/playerDP.png')}
                    style={{width: 35, height: 35, borderRadius: 20}}
                  />
                  <Text
                    style={[
                      styles.txt,
                      {paddingHorizontal: 10, paddingVertical: 20},
                    ]}>
                    King Tigers
                  </Text>
                </View>
                <Text style={[styles.number, {textAlign: 'center'}]}>
                  0 - 0
                </Text>
                <Text style={styles.ur_text}>UR</Text>
              </View>
            </View>
            <Text style={styles.head}>Spring 2023</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.box1}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={styles.baseballcontainer}>
                    <Image
                      source={require('../assets/images/baseballImg.png')}
                      style={{width: 38, height: 38, resizeMode: 'cover'}}
                    />
                  </View>
                  <Image
                    source={require('../assets/images/red_profile.png')}
                    style={styles.img1}
                  />
                  <Text style={styles.place}>COACH</Text>
                </View>
                <View style={[styles.natimage, {paddingStart: 15}]}>
                  <Image
                    source={require('../assets/images/Splash.jpeg')}
                    style={{width: 35, height: 35, borderRadius: 20}}
                  />
                  <Text style={[styles.txt, {padding: 10}]}>
                    Chicago {'\n'}Cubs
                  </Text>
                </View>
                <Text style={[styles.number, {textAlign: 'center'}]}>
                  0 - 0
                </Text>
              </View>
              <View style={styles.box1}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={styles.baseballcontainer}>
                    <Image
                      source={require('../assets/images/baseballImg.png')}
                      style={{width: 38, height: 38, resizeMode: 'cover'}}
                    />
                  </View>
                  <Image
                    source={require('../assets/images/red_profile.png')}
                    style={styles.img1}
                  />
                  <Text style={styles.place}>COACH</Text>
                </View>
                <View style={[styles.natimage, {paddingStart: 15}]}>
                  <Image
                    source={require('../assets/images/playerDP.png')}
                    style={{width: 35, height: 35, borderRadius: 20}}
                  />
                  <Text
                    style={[
                      styles.txt,
                      {paddingHorizontal: 10, paddingVertical: 20},
                    ]}>
                    Falkland.Gil.
                  </Text>
                </View>
                <Text
                  style={[
                    styles.number,
                    {textAlign: 'center', paddingBottom: 25},
                  ]}>
                  0 - 0
                </Text>
              </View>
            </View>
            <View style={[styles.box1, {marginTop: 30}]}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.baseballcontainer}>
                  <Image
                    source={require('../assets/images/baseballImg.png')}
                    style={{width: 38, height: 38, resizeMode: 'cover'}}
                  />
                </View>
                <Image
                  source={require('../assets/images/red_profile.png')}
                  style={styles.img1}
                />
                <Text style={styles.place}>COACH</Text>
              </View>
              <View style={[styles.natimage, {paddingStart: 15}]}>
                <Image
                  source={require('../assets/images/playerDP.png')}
                  style={{width: 35, height: 35, borderRadius: 20}}
                />
                <Text
                  style={[
                    styles.txt,
                    {paddingHorizontal: 10, paddingVertical: 20},
                  ]}>
                  Falkland.Gil.
                </Text>
              </View>
              <Text
                style={[
                  styles.number,
                  {textAlign: 'center', paddingBottom: 20},
                ]}>
                0 - 0
              </Text>
            </View>
            {/* <View
              style={{
                alignItems: 'flex-end',
              }}>
              <Image
                source={require('../assets/images/round_add.png')}
                style={{
                  width: 55,
                  height: 55,
                  position: 'absolute',
                  bottom: 90,
                }}
              />
            </View> */}
          </View>
        </ScrollView>
      );
    }
  };

  return (
    <View style={{flex: 1, padding: 25, backgroundColor: 'white'}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text style={styles.home}>Home</Text>
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
      <View style={styles.tab}>
        <TouchableOpacity onPress={() => setSelectedTab('allGames')}>
          <Text
            style={{
              fontWeight: selectedTab === 'allGames' ? '600' : 'normal',
              color: selectedTab === 'allGames' ? 'white' : '#005dab',
              backgroundColor: selectedTab === 'allGames' ? '#005dab' : 'white',
              paddingHorizontal: selectedTab === 'allGames' ? 35 : 35,
              paddingVertical: selectedTab === 'allGames' ? 12 : 12,
              borderRadius: selectedTab === 'allGames' ? 30 : 30,
            }}>
            All Games
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('myTeams')}>
          <Text
            style={{
              fontWeight: selectedTab === 'myTeams' ? '600' : 'normal',
              color: selectedTab === 'myTeams' ? 'white' : '#005dab',
              backgroundColor: selectedTab === 'myTeams' ? '#005dab' : 'white',
              paddingHorizontal: selectedTab === 'myTeams' ? 36 : 35,
              paddingVertical: selectedTab === 'myTeams' ? 12 : 12,
              borderRadius: selectedTab === 'myTeams' ? 30 : 30,
            }}>
            My Teams
          </Text>
        </TouchableOpacity>
      </View>
      {renderContent()}
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
  ur_text: {
    textAlign: 'right',
    color: '#005dab',
    paddingRight: 8,
    textDecorationColor: 'blue',
    textDecorationLine: 'underline',
    fontWeight: '600',
    paddingBottom: 15,
    marginTop: -10,
  },
  box1: {
    borderWidth: 2,
    borderColor: '#cccccc',
    borderRadius: 15,
    width: '49%',
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
  startscoring: {
    backgroundColor: '#f3f3f1',
    color: '#f5c94b',
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
});
export default HomeScreen;
