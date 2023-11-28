import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import commonStyles from '../components/Styles';
import Snackbar from 'react-native-snackbar';
import {useChangePasswordMutation} from '../redux/services/AuthService';

const ChangePasswordScreen = ({navigation}: any) => {
  const [changePassword] = useChangePasswordMutation();
  const [oldpassword, setOldPassword] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [isOldPasswordVisible, setOldPasswordVisible] = useState(true);
  const [isNewPasswordVisible, setNewPasswordVisible] = useState(true);
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(true);
  const showSnackbar = (message: string) => {
    Snackbar.show({
      text: message,
    });
  };

  const handleUpdate = async () => {
    if (!oldpassword || !newpassword || !confirmpassword) {
      showSnackbar('All fields are required.');
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[@,!,#,$,%,*,&]).{6,}$/.test(newpassword)
    ) {
      showSnackbar(
        'Password must contain at least one uppercase, one lowercase and one number with a minimum length of 6',
      );
    } else if (newpassword !== confirmpassword) {
      showSnackbar('passwords do not match');
    } else {
      let changePasswordReq = {
        old_password: oldpassword.trim(),
        new_password: newpassword.trim(),
        confirm_password: confirmpassword.trim(),
      };
      await changePassword(changePasswordReq);
      showSnackbar('password updated successfully');
      navigation.goBack();
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={commonStyles.headcontainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/images/left_chevron.png')}
            style={{width: 25, height: 28, resizeMode: 'contain'}}></Image>
        </TouchableOpacity>
        <Text style={commonStyles.textstyle}>Change Password</Text>
      </View>
      <View style={{paddingHorizontal: 30, marginVertical: 30}}>
        <View style={commonStyles.textinput}>
          <Text style={commonStyles.label}>Old Password</Text>
          <TextInput
            style={{fontSize: 16}}
            placeholder="Enter your old password"
            placeholderTextColor="#a6a6a6"
            value={oldpassword}
            onChangeText={setOldPassword}
            secureTextEntry={isOldPasswordVisible}></TextInput>
          <TouchableOpacity
            onPress={() => setOldPasswordVisible(!isOldPasswordVisible)}>
            <Image
              source={
                isOldPasswordVisible
                  ? require('../assets/images/eye-with-line.png')
                  : require('../assets/images/eye.png')
              }
              style={{width: 28, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
        </View>
        <View style={commonStyles.textinput}>
          <Text style={commonStyles.label}>New Password</Text>
          <TextInput
            style={{fontSize: 16}}
            placeholder="Enter your new password"
            placeholderTextColor="#a6a6a6"
            value={newpassword}
            onChangeText={setNewPassword}
            secureTextEntry={isNewPasswordVisible}></TextInput>
          <TouchableOpacity
            onPress={() => setNewPasswordVisible(!isNewPasswordVisible)}>
            <Image
              source={
                isNewPasswordVisible
                  ? require('../assets/images/eye-with-line.png')
                  : require('../assets/images/eye.png')
              }
              style={{width: 28, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
        </View>
        <View style={commonStyles.textinput}>
          <Text style={commonStyles.label}>Confirm Password</Text>
          <TextInput
            style={{fontSize: 16}}
            placeholder="Enter your confirm password"
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
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 30,
        }}>
        <Text onPress={() => navigation.goBack()} style={styles.text}>
          CANCEL
        </Text>
        <Text
          onPress={handleUpdate}
          style={[styles.text, {color: '#fff', backgroundColor: '#005dab'}]}>
          UPDATE
        </Text>
      </View>
    </View>
  );
};

export default ChangePasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
