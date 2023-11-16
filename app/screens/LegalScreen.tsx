import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import commonStyles from '../components/Styles';

const LegalScreen = ({navigation}: any) => {
  return (
    <View style={commonStyles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Image
        source={require('../assets/images/loginBg.png')}
        style={commonStyles.bgimg}
      />
      <View style={commonStyles.headcontainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/images/left_chevron.png')}
            style={{width: 26, height: 26, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
        <Text style={commonStyles.textstyle}>Legal</Text>
      </View>
      <View style={styles.paracontainer}>
        <Text style={commonStyles.itemHeader}>Legal Information</Text>
        <Text style={commonStyles.itemText}>
          • Terms of Service{'\n'}• End User License Agreement{'\n'}• Copyright
          information
        </Text>
      </View>
    </View>
  );
};

export default LegalScreen;

const styles = StyleSheet.create({
  paracontainer: {
    backgroundColor: 'rgba(247, 247, 247, 0.7)',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    marginHorizontal: 30,
    marginTop: 40,
  },
});
