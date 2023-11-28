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
import {useForgotPasswordMutation} from '../redux/services/AuthService';

const Forgotpasswordscreen = ({navigation}: any) => {
  const [forgotPassword] = useForgotPasswordMutation();
  const [email, setEmail] = useState('');
  const showSnackbar = (message: string) => {
    Snackbar.show({
      text: message,
    });
  };
  const handleSignin = async () => {
    if (!email) {
      showSnackbar('Email address required.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      showSnackbar('Invalid email address');
    } else {
      // navigation.navigate('Signin');
      // setEmail('');
      let forgotPasswordReq = {
        email: email.trim().toLowerCase(),
      };
      await forgotPassword(forgotPasswordReq);
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
      <Text style={styles.heading}>Forgot Password?</Text>
      <Text style={styles.text}>
        Please enter your email id. We will send you a link to reset your
        password
      </Text>
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
      <Text style={styles.resetlink} onPress={handleSignin}>
        Send Reset Link
      </Text>
      <Text
        style={[commonStyles.underlined_text, styles.back]}
        onPress={() => navigation.navigate('Signin')}>
        Back
      </Text>
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
    paddingBottom: 15,
  },
  text: {
    fontSize: 17,
    fontWeight: '400',
    color: 'black',
    lineHeight: 25,
    paddingBottom: 40,
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
    paddingRight: 20,
  },
  resetlink: {
    backgroundColor: '#005dab',
    textAlign: 'center',
    paddingVertical: 15,
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
    borderRadius: 40,
    marginVertical: 45,
  },
  back: {textAlign: 'center'},
});
export default Forgotpasswordscreen;
