import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import Snackbar from 'react-native-snackbar';
import commonStyles from '../components/Styles';

const Signin = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(true);

  const showSnackbar = (message: string) => {
    Snackbar.show({
      text: message,
    });
  };

  // const handleSignin = () => {
  //   if (!email || !password) {
  //     showSnackbar('All fields are required.');
  //   } else if (!/\S+@\S+\.\S+/.test(email)) {
  //     showSnackbar('Invalid email address');
  //   } else if (
  //     !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[@,!,#,$,%,*,&]).{6,}$/.test(password)
  //   ) {
  //     showSnackbar(
  //       'Password must contain at least one uppercase, one lowercase and one number with a minimum length of 6',
  //     );
  //   } else {
  //     showSnackbar('Welcome back!');
  //     navigation.navigate('Tab');
  //     setEmail('');
  //     setPassword('');
  //   }
  // };

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
      <View style={[styles.textinput]}>
        <Text style={commonStyles.label}>Password</Text>
        <TextInput
          style={{fontSize: 17}}
          placeholder="Enter your password"
          placeholderTextColor="#a6a6a6"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={isPasswordVisible}></TextInput>
        <TouchableOpacity
          onPress={() => setPasswordVisible(!isPasswordVisible)}>
          <Image
            source={
              isPasswordVisible
                ? require('../assets/images/eye-with-line.png')
                : require('../assets/images/eye.png')
            }
            style={{width: 30, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.forgetpasscontainer}>
        <Text
          style={styles.forgetpass}
          onPress={() => navigation.navigate('Forgotpassword')}>
          Forgot Password?
        </Text>
      </View>
      <Text style={styles.signin} onPress={() => navigation.navigate('Tab')}>
        SIGN IN
      </Text>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 12,
          }}>
          <Text style={styles.text1}>Don't have an account?</Text>

          <Text
            style={commonStyles.underlined_text}
            onPress={() => navigation.navigate('Signup')}>
            {' '}
            Sign Up
          </Text>
        </View>
        <Text
          style={commonStyles.underlined_text}
          onPress={() => navigation.navigate('Loginasfan')}>
          Login as a Fan
        </Text>
        <Text style={styles.login}>Login with</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        {Platform.OS === 'ios' ? (
          <View>
            <Image
              source={require('../assets/images/GoogleLogo.png')}
              style={styles.logo1}
            />
            <Image
              source={require('../assets/images/appleLogo.png')}
              style={styles.logo2}
            />
          </View>
        ) : (
          <Image
            source={require('../assets/images/GoogleLogo.png')}
            style={styles.logo1}
          />
        )}
      </View>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
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
    paddingStart: 15,
  },
  textinput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    marginBottom: 30,
    borderRadius: 40,
    paddingStart: 30,
    fontSize: 17,
    height: 55,
    zIndex: 0,
    paddingRight: 20,
  },
  forgetpasscontainer: {
    flexDirection: 'row-reverse',
  },
  forgetpass: {
    fontSize: 16,
    fontWeight: '500',
    color: '#005dab',
    marginRight: 15,
    marginTop: -10,
  },
  signin: {
    backgroundColor: '#005dab',
    textAlign: 'center',
    paddingVertical: 15,
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
    borderRadius: 40,
    marginVertical: 20,
    marginHorizontal: 15,
  },
  text1: {
    fontSize: 15,
    color: '#000',
    fontWeight: '400',
  },
  login: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    paddingTop: 40,
  },
  logo1: {
    resizeMode: 'contain',
    width: 60,
  },
  logo2: {
    resizeMode: 'contain',
    width: 60,
    heigth: 60,
    marginStart: 30,
  },
  text2: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000',
    paddingTop: 20,
    textAlign: 'center',
  },
});

export default Signin;
