import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';

const Welcome = ({navigation}: any) => {
  const [step, setStep] = useState(1);

  const onNext = () => {
    setStep(step + 1);
  };

  return (
    <View style={styles.container1}>
      {step === 1 && (
        <View style={styles.body}>
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="light-content"
          />
          <ImageBackground
            source={require('../assets/images/intro1.png')}
            style={styles.Image1}
          />

          <View style={styles.container}>
            <Text style={styles.heading}>
              Find out the results in real{'\n'}time.
            </Text>
            <Text style={styles.para}>
              Recieve notifications of the matches of your {'\n'}favorite team
            </Text>
          </View>
          <TouchableOpacity>
            <View style={{flexDirection: 'row-reverse'}}>
              <Text style={styles.skip} onPress={onNext}>
                SKIP
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
      {step === 2 && (
        <View style={styles.body}>
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="light-content"
          />
          <ImageBackground
            source={require('../assets/images/intro2.png')}
            style={styles.Image1}
          />

          <View style={styles.container}>
            <Text style={styles.heading}>
              Know the statistics of the {'\n'}series
            </Text>
            <Text style={styles.para}>
              All the data on how the series progresses {'\n'}and the number of
              previous years
            </Text>
          </View>
          <TouchableOpacity>
            <View style={{flexDirection: 'row-reverse'}}>
              <Text style={styles.skip} onPress={onNext}>
                SKIP
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
      {step === 3 && (
        <View style={styles.body}>
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="light-content"
          />
          <ImageBackground
            source={require('../assets/images/intro3.png')}
            style={styles.Image1}
          />
          {/* <View style={styles.bottomOverlay}></View> */}
          <View style={styles.container}>
            <Text style={styles.heading}>
              Get the latest news from{'\n'}the league
            </Text>
            <Text style={styles.para}>
              Follow the news of your team with news and{'\n'}reports.
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
            <View style={{flexDirection: 'row-reverse'}}>
              <Text style={styles.getstarted}>GET STARTED</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
  },
  body: {
    flex: 1,
  },
  Image1: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    position: 'absolute',
  },
  container: {
    flex: 2,
    marginLeft: 30,
    justifyContent: 'center',
    paddingTop: 400,
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
    alignItems: 'center',
    color: 'white',
  },
  para: {
    fontSize: 18,
    fontWeight: '400',
    color: 'white',
    paddingVertical: 15,
    lineHeight: 25,
  },
  skip: {
    position: 'absolute',
    bottom: 60,
    color: '#fff',
    fontSize: 20,
    marginRight: 60,
  },
  getstarted: {
    position: 'absolute',
    bottom: 60,
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
    marginRight: 60,
    backgroundColor: '#005dab',
    paddingHorizontal: 25,
    paddingVertical: 13,
    borderRadius: 25,
  },
  bottomOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 300,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default Welcome;
