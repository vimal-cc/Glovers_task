import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';

const WelcomeScreen = ({navigation}: any) => {
  return (
    // <View style={styles.body}>
    //   <StatusBar
    //     translucent
    //     backgroundColor="transparent"
    //     barStyle="light-content"
    //   />
    //   <ImageBackground
    //     source={require('../assets/images/intro1.png')}
    //     style={styles.Image1}
    //   />
    //   <View style={styles.container}>
    //     <Text style={styles.heading}>
    //       Find out the results in real{'\n'}time.
    //     </Text>
    //     <Text style={styles.para}>
    //       Recieve notifications of the matches of your {'\n'}favorite team
    //     </Text>
    //   </View>
    //   <TouchableOpacity onPress={() => navigation.navigate('Welcome2')}>
    //     <View style={{flexDirection: 'row-reverse'}}>
    //       <Text style={styles.skip}>SKIP</Text>
    //     </View>
    //   </TouchableOpacity>
    // </View>

    // <View style={styles.body}>
    //   <StatusBar
    //     translucent
    //     backgroundColor="transparent"
    //     barStyle="light-content"
    //   />
    //   <ImageBackground
    //     source={require('../assets/images/intro2.png')}
    //     style={styles.Image1}
    //   />
    //   <View style={styles.container}>
    //     <Text style={styles.heading}>
    //       Know the statistics of the {'\n'}series
    //     </Text>
    //     <Text style={styles.para}>
    //       All the data on how the series progresses {'\n'}and the number of
    //       previous years
    //     </Text>
    //   </View>
    //   <TouchableOpacity onPress={() => navigation.navigate('Welcome2')}>
    //     <View style={{flexDirection: 'row-reverse'}}>
    //       <Text style={styles.skip}>SKIP</Text>
    //     </View>
    //   </TouchableOpacity>
    // </View>

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
      <View style={styles.container}>
        <Text style={styles.heading}>
          Get the latest news from{'\n'}the league
        </Text>
        <Text style={styles.para}>
          Follow the news of your team with news and{'\n'}reports.
        </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Welcome2')}>
        <View style={{flexDirection: 'row-reverse'}}>
          <Text style={styles.skip}>SKIP</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  Image1: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
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
});
export default WelcomeScreen;
