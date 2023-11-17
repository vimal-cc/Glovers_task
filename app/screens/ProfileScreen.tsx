import {
  View,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';

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
  const [rateModalVisible, setRateModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(false);
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

  const RateModal = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={rateModalVisible}
      onRequestClose={() => {
        setRateModalVisible(!rateModalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.slogan}>Your Opinion matters to us !</Text>
            <Text style={styles.exp}>Rate your experience</Text>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../assets/images/star_filled.png')}
                style={styles.star}
              />
              <Image
                source={require('../assets/images/star_filled.png')}
                style={styles.star}
              />
              <Image
                source={require('../assets/images/star_filled.png')}
                style={styles.star}
              />
              <Image
                source={require('../assets/images/star_filled.png')}
                style={styles.star}
              />
              <Image
                source={require('../assets/images/star_empty.png')}
                style={styles.star}
              />
            </View>
            <TextInput
              style={styles.textarea}
              multiline={true}
              numberOfLines={4}
              defaultValue="Good"
            />
          </View>
          <View
            style={{height: 1, backgroundColor: '#d4d4d4', marginBottom: 15}}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
            }}>
            <Text
              style={styles.button1}
              onPress={() => setRateModalVisible(!rateModalVisible)}>
              Not now
            </Text>
            <Text style={styles.button2}>Submit</Text>
          </View>
        </View>
      </View>
    </Modal>
  );

  const DeleteModal = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={deleteModalVisible}
      onRequestClose={() => {
        setDeleteModalVisible(!deleteModalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={[styles.modalView]}>
          <Text style={styles.ques}>
            Are you sure to delete this {'\n'}account?
          </Text>
          <View
            style={{height: 1, backgroundColor: '#d4d4d4', marginBottom: 15}}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
            }}>
            <Text
              style={[styles.button1, {paddingHorizontal: 45}]}
              onPress={() => setDeleteModalVisible(!deleteModalVisible)}>
              No
            </Text>
            <Text style={[styles.button2, {paddingHorizontal: 45}]}>Yes</Text>
          </View>
        </View>
      </View>
    </Modal>
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
      setDeleteModalVisible(!deleteModalVisible);
    }
    if (item.title === 'Rate') {
      setRateModalVisible(!rateModalVisible);
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
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <Image
            source={require('../assets/images/notification_bell.png')}
            style={styles.logo}
          />
          </TouchableOpacity>
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
      <RateModal />
      <DeleteModal />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    paddingBottom: 0,
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
    paddingVertical: 18,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textarea: {
    marginVertical: 20,
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderRadius: 15,
    borderColor: 'grey',
    padding: 10,
    fontSize: 14,
    fontWeight: '500',
    textAlignVertical: 'top',
    width: 280,
  },
  slogan: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
    textAlign: 'center',
  },
  exp: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
    paddingVertical: 20,
  },
  star: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginHorizontal: 5,
  },
  button1: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderWidth: 0.6,
    borderColor: 'grey',
    borderRadius: 20,
  },
  button2: {
    paddingHorizontal: 35,
    paddingVertical: 10,
    backgroundColor: '#005dab',
    borderRadius: 20,
    color: '#fff',
    fontWeight: '600',
  },
  ques: {
    fontSize: 17,
    fontWeight: '500',
    color: 'black',
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 35,
  },
});
export default ProfileScreen;
