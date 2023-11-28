import {
  View,
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

const Splashscreen = ({navigation}: any) => {
  const tokenDetails = useSelector((state: any) => state.auth.tokenDetails);
  useEffect(() => {
    setTimeout(() => {
      if (tokenDetails) {
        navigation.replace('Tab');
      } else {
        navigation.replace('Signin');
      }
    }, 3000);
  }, [tokenDetails, navigation]);

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ImageBackground
        source={require('../assets/images/Splash.jpeg')}
        style={styles.Image1}
      />
      <Image
        source={require('../assets/images/gloverslogo.png')}
        style={styles.Image2}
      />
    </View>
  );
};

// const Splashscreen = () => {
//   const [splashVisible, setSplashVisible] = useState(true);

//   useEffect(() => {
//     const splashTimer = setTimeout(() => {
//       setSplashVisible(false);
//     }, 3000);

//     return () => clearTimeout(splashTimer);
//   }, []);
//   return (
//     <View style={styles.container}>
//       {splashVisible ? (
//         <View style={styles.container}>
//           <StatusBar
//             translucent
//             backgroundColor="transparent"
//             barStyle="light-content"
//           />
//           <ImageBackground
//             source={require('../assets/images/Splash.jpeg')}
//             style={styles.Image1}
//           />
//           <Image
//             source={require('../assets/images/gloverslogo.png')}
//             style={styles.Image2}
//           />
//         </View>
//       ) : (
//         <WelcomeScreen/>
//       )}
//     </View>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Image1: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  Image2: {
    width: 220,
    height: 60,
    resizeMode: 'stretch',
  },
});

export default Splashscreen;
