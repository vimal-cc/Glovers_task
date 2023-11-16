import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import commonStyles from '../components/Styles';
import Snackbar from 'react-native-snackbar';

const Loginasfan = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const showSnackbar = (message: string) => {
    Snackbar.show({
      text: message,
    });
  };
  const handleSignin = () => {
    if (!email) {
      showSnackbar('Email address required.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      showSnackbar('Invalid email address');
    } else {
      navigation.navigate('Tab');
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
      <View style={styles.logocontainer}>
        <Image
          source={require('../assets/images/gloverslogo.png')}
          style={styles.logo}
        />
      </View>
      <Text style={styles.heading}>Get started with Glover's</Text>
      <View>
        <Text style={commonStyles.label}>Email Address</Text>
        <TextInput
          style={styles.textinput}
          placeholder="Enter your email address"
          placeholderTextColor="#a6a6a6"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"></TextInput>
      </View>
      <Text style={styles.signin} onPress={handleSignin}>
        SIGN IN
      </Text>
      <View style={{alignItems: 'center'}}>
        <Text
          style={commonStyles.underlined_text}
          onPress={() => navigation.navigate('Signin')}>
          Back
        </Text>
        <Text style={styles.text2}>
          Glover's{' '}
          <Text
            style={commonStyles.underlined_text}
            onPress={() => navigation.navigate('TermsandConditions')}>
            Terms of Service{' '}
          </Text>{' '}
          and
          <Text style={commonStyles.underlined_text}> Privacy policy</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
  },
  logocontainer: {
    alignItems: 'center',
    paddingTop: 90,
    paddingBottom: 60,
  },
  logo: {
    resizeMode: 'stretch',
    width: 300,
    height: 75,
  },
  heading: {
    fontSize: 23,
    fontWeight: '500',
    color: '#000',
    paddingBottom: 30,
  },
  textinput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 40,
    paddingStart: 30,
    fontSize: 17,
    height: 55,
    zIndex: 0,
    paddingRight: 20,
  },
  signin: {
    backgroundColor: '#005dab',
    textAlign: 'center',
    paddingVertical: 15,
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
    borderRadius: 40,
    marginVertical: 40,
  },
  text2: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000',
    paddingTop: 20,
  },
});
export default Loginasfan;
