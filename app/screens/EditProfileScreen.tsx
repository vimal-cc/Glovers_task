import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import commonStyles from '../components/Styles';
import Snackbar from 'react-native-snackbar';
import {useSelector} from 'react-redux';

const EditProfileScreen = ({navigation}: any) => {
  const userDetails = useSelector(state => state.auth.userDetails);
  console.log('EditProfile------->', userDetails);
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState(userDetails?.email || '');

  const showSnackbar = (message: string) => {
    Snackbar.show({
      text: message,
    });
  };

  const handleDetails = () => {
    if (!firstname || !lastname) {
      showSnackbar('First name and last name are required.');
    } else {
      navigation.goBack();
      setFirstName('');
      setLastName('');
      setEmail('');
    }
  };

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
          alignItems: 'center',
          paddingTop: 20,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack('')}>
          <Image
            source={require('../assets/images/left_chevron.png')}
            style={{width: 25, height: 28, resizeMode: 'contain'}}></Image>
        </TouchableOpacity>
        <Text style={styles.changepass}>Edit Profile</Text>
      </View>
      <View style={{alignItems: 'center', paddingVertical: 20}}>
        <Image
          source={require('../assets/images/profileIcon.png')}
          style={styles.Image}></Image>
        <Image
          source={require('../assets/images/profile_delete.png')}
          style={styles.delete}></Image>
      </View>
      <View style={{marginVertical: 25}}>
        <View>
          <Text style={commonStyles.label}>First Name</Text>
          <TextInput
            style={commonStyles.textinput}
            placeholder="Enter your first name"
            placeholderTextColor="#a6a6a6"
            value={firstname}
            onChangeText={setFirstName}></TextInput>
        </View>
        <View>
          <Text style={commonStyles.label}>Last Name</Text>
          <TextInput
            style={commonStyles.textinput}
            placeholder="Enter your last name"
            placeholderTextColor="#a6a6a6"
            value={lastname}
            onChangeText={setLastName}></TextInput>
        </View>
        <View>
          <Text style={commonStyles.label}>Email Address</Text>
          <TextInput
            style={commonStyles.textinput}
            placeholder="Enter your email address"
            placeholderTextColor="#a6a6a6"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            editable={false}></TextInput>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text onPress={() => navigation.goBack()} style={styles.text}>
          CANCEL
        </Text>
        <Text
          onPress={handleDetails}
          style={[
            styles.text,
            {color: '#fff', backgroundColor: '#005dab', paddingHorizontal: 65},
          ]}>
          SAVE
        </Text>
      </View>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: 'white',
  },
  changepass: {
    fontSize: 23,
    fontWeight: '700',
    color: 'black',
    marginStart: 30,
  },
  Image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: 'stretch',
    zIndex: 0,
    position: 'relative',
  },
  delete: {
    width: 30,
    height: 30,
    // position: 'absolute',
    top: -30,
    left: 35,
    zIndex: 1,
  },
  text: {
    backgroundColor: '#cecece',
    paddingVertical: 13,
    paddingHorizontal: 50,
    color: '#000',
    fontSize: 18,
    fontWeight: '500',
    borderRadius: 25,
  },
});
