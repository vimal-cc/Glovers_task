import {
  View,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';

const Data = [
  {
    key: '1',
    title: 'Change Password',
    icon: require('../assets/images/Lock_Icon.png'),
  },
  {
    key: '2',
    title: 'Contact Support',
    icon: require('../assets/images/ContactSupport_Icon.png'),
  },
  {
    key: '3',
    title: 'Help Center',
    icon: require('../assets/images/QuestionMark_Icon.png'),
  },
  {
    key: '4',
    title: 'League Settings',
    icon: require('../assets/images/settings_icon.png'),
  },
  {key: '5', title: 'Legal', icon: require('../assets/images/Legal_Icon.png')},
  {key: '6', title: 'Rate', icon: require('../assets/images/star_blue.png')},
  {
    key: '7',
    title: 'Delete Account',
    icon: require('../assets/images/delete_Icon.png'),
  },
];

const ProfileScreen = ({navigation}: any) => {
  const renderItem = ({item}: any) => (
    <TouchableOpacity onPress={() => handlePress(item)}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={item.icon} style={{width: 28, height: 28}} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
      {item.key !== '7' && (
        <View
          style={{borderBottomColor: '#d9d9d9', borderBottomWidth: 1}}></View>
      )}
    </TouchableOpacity>
  );

  const handlePress = item => {
    if (item.title === 'Change Password') {
      navigation.navigate('changepassword');
    }
    if (item.title === 'Contact Support') {
      navigation.navigate('Contactsupport');
    }
    if (item.title === 'Help Center') {
      navigation.navigate('Helpcenter');
    }
    if (item.title === 'League Settings') {
      navigation.navigate('Leaguesettings');
    }
    if (item.title === 'Legal') {
      navigation.navigate('Legal');
    }
    if (item.title === 'Delete Account') {
      navigation.navigate('Deleteaccount');
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={styles.heading}>
        <View>
          <Text style={styles.profile}>Profile</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../assets/images/notification_bell.png')}
            style={styles.logo}
          />
        </View>
      </View>
      <View style={{alignItems: 'center', paddingTop: 20}}>
        <Image
          source={require('../assets/images/profileIcon.png')}
          style={styles.Image}></Image>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.name}>Davis Patrick</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Editprofile')}>
            <Image
              source={require('../assets/images/imgEditIcon.png')}
              style={{width: 20, height: 20, marginStart: 10}}></Image>
          </TouchableOpacity>
        </View>
        <Text style={{color: '#000', fontSize: 18, fontWeight: '400'}}>
          vishnukumar01@gmail.com
        </Text>
        <Text style={styles.prof}>Coach</Text>
      </View>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        contentContainerStyle={styles.titlecontainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    paddingBottom:0,
    backgroundColor: 'white',
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  profile: {
    fontSize: 25,
    fontWeight: '600',
    color: 'black',
    letterSpacing: 1,
  },
  logo: {
    width: 21,
    height: 30,
    resizeMode: 'contain',
  },
  head: {
    fontSize: 20,
    fontWeight: '600',
    paddingVertical: 25,
    color: 'black',
  },
  Image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: 'stretch',
  },
  name: {
    color: '#000',
    fontSize: 20,
    fontWeight: '500',
    paddingTop: 10,
  },
  prof: {
    marginTop: 15,
    backgroundColor: '#fce8e3',
    paddingHorizontal: 16,
    paddingVertical: 6,
    color: '#005dab',
    borderRadius: 20,
    fontSize: 13,
    fontWeight: '400',
  },
  titlecontainer: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 25,
    borderRadius: 15,
    marginTop: 20,
  },
  title: {
    fontSize: 17,
    fontWeight: '400',
    color: '#000',
    marginStart: 20,
    paddingVertical: 20,
  },
});
export default ProfileScreen;
