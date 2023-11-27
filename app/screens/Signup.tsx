import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import React, {useState, useRef} from 'react';
import Snackbar from 'react-native-snackbar';
import commonStyles from '../components/Styles';
import DropdownComponent from './Sample';
import {useCreateNewUserMutation} from '../redux/services/AuthService';

const Signup = ({navigation}: any) => {
  const [createNewUser] = useCreateNewUserMutation();
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(true);
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(true);

  const showSnackbar = (message: string) => {
    Snackbar.show({
      text: message,
    });
  };

  const handleSignin = async () => {
    if (!firstname || !lastname || !email || !password || !confirmpassword) {
      showSnackbar('All fields are required.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      showSnackbar('Invalid email address');
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[@,!,#,$,%,*,&]).{6,}$/.test(password)
    ) {
      showSnackbar(
        'Password must contain at least one uppercase, one lowercase and one number with a minimum length of 6',
      );
    } else if (password !== confirmpassword) {
      showSnackbar('passwords do not match');
    } else {
      // setFirstName('');
      // setLastName('');
      // setEmail('');
      // setSelectedOption('');
      // setPassword('');
      // setConfirmPassword('');
      let createNewUserReq = {
        first_name: firstname.trim(),
        last_name: lastname.trim(),
        email: email.trim().toLowerCase(),
        password: password.trim(),
        confirmpassword: confirmpassword.trim(),
        roles: 'coach',
      };
      await createNewUser(createNewUserReq);
      navigation.navigate('Tab');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../assets/images/gloverslogo.png')}
            style={styles.logo}
          />
        </View>
        <Text style={styles.heading}>Get registered with Glover's</Text>
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
            autoCapitalize="none"></TextInput>
        </View>
        <View>
          <Text style={commonStyles.label}>Role</Text>
          <DropdownComponent />
        </View>
        <View style={commonStyles.textinput}>
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
              style={{width: 28, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
        </View>
        <View style={commonStyles.textinput}>
          <Text style={commonStyles.label}>Confirm password</Text>
          <TextInput
            style={{fontSize: 17}}
            placeholder="Confirm password"
            placeholderTextColor="#a6a6a6"
            value={confirmpassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={isConfirmPasswordVisible}></TextInput>
          <TouchableOpacity
            onPress={() =>
              setConfirmPasswordVisible(!isConfirmPasswordVisible)
            }>
            <Image
              source={
                isConfirmPasswordVisible
                  ? require('../assets/images/eye-with-line.png')
                  : require('../assets/images/eye.png')
              }
              style={{width: 28, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.signupcontainer}>
          By signing up you agree to the Glover's{'\n'}
          <Text
            style={commonStyles.underlined_text}
            onPress={() => navigation.navigate('TermsandConditions')}>
            Terms of Service{' '}
          </Text>{' '}
          and <Text style={commonStyles.underlined_text}> Privacy policy</Text>
        </Text>
        <Text style={styles.signupbutton} onPress={handleSignin}>
          SIGN UP
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 12,
            justifyContent: 'center',
          }}>
          <Text style={styles.text1}>Don't have an account?</Text>
          <Text
            style={commonStyles.underlined_text}
            onPress={() => navigation.navigate('Signin')}>
            {' '}
            Sign In
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    paddingTop: 60,
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
    paddingVertical: 30,
  },
  signupcontainer: {
    textAlign: 'center',
    fontSize: 17,
    lineHeight: 23,
    color: '#000',
    marginTop: -10,
  },
  signupbutton: {
    backgroundColor: '#005dab',
    textAlign: 'center',
    paddingVertical: 15,
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
    borderRadius: 40,
    marginTop: 20,
  },
  text1: {
    fontSize: 16,
    color: '#000',
    fontWeight: '400',
  },
});
export default Signup;
