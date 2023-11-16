import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Verification = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <ImageBackground
        source={require('../assets/images/Bg.png')}
        style={styles.Image1}
      />
      <Icon
        onPress={() => navigation.navigate('Signuppage')}
        style={styles.backicon}
        name="chevron-left"
        size={25}
        color="#000000"
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.Insidecontainer1}>
          <Image
            source={require('../assets/images/shield.png')}
            style={styles.Image2}
          />
        </View>
        <Text style={styles.text1}>Verify your email address</Text>
        <Text style={styles.text2}>
          We email a security code to {'\n'}
          the beynd@gmail.com
        </Text>
        <Text style={styles.text3}>
          Enter the code below to confirm {'\n'} your email address
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            paddingVertical: 30,
          }}>
          <TextInput
            style={styles.textinput}
            placeholder="0"
            placeholderTextColor="#4298b2"></TextInput>
          <TextInput
            style={styles.textinput}
            placeholder="0"
            placeholderTextColor="#4298b2"></TextInput>
          <TextInput
            style={styles.textinput}
            placeholder="0"
            placeholderTextColor="#4298b2"></TextInput>
          <TextInput
            style={styles.textinput}
            placeholder="0"
            placeholderTextColor="#4298b2"></TextInput>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={styles.signin}>Submit</Text>
        </TouchableOpacity>
        <Text style={styles.resend}>Resend Code</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Image1: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  backicon: {
    paddingTop: 70,
    paddingStart: 30,
  },
  Insidecontainer1: {
    alignItems: 'center',
  },
  Image2: {
    width: 120,
    height: 180,
    resizeMode: 'contain',
    marginVertical: 30,
  },
  text1: {
    fontSize: 25,
    paddingTop: 10,
    color: '#0097A7',
    fontWeight: '400',
    textAlign: 'center',
  },
  text2: {
    fontSize: 20,
    paddingVertical: 30,
    color: 'black',
    lineHeight: 28,
    fontWeight: '500',
    textAlign: 'center',
  },
  text3: {
    fontSize: 20,
    color: 'black',
    lineHeight: 28,
    fontWeight: '500',
    textAlign: 'center',
  },
  textinput: {
    borderBottomWidth: 2,
    marginHorizontal: 10,
    borderColor: '#0097A7',
    color: '#000000',
    paddingTop: 25,
    fontSize: 17,
    width: 70,
    textAlign: 'center',
  },
  signin: {
    backgroundColor: '#4298b2',
    textAlign: 'center',
    marginHorizontal: 35,
    paddingVertical: 12,
    fontSize: 19,
    color: '#fff',
    borderRadius: 14,
    marginTop: 50,
  },
  resend: {
    fontSize: 20,
    paddingTop: 20,
    color: '#0097A7',
    fontWeight: '500',
    textAlign: 'center',
  },
});
export default Verification;
