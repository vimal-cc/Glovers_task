
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

const HelpCenterScreen = ({ navigation }: any) => {
  const data = [
    { category: 'Getting Started', items: ['Downloading and installing the app', 'Creating an account', "Navigating the app's main feautures"] },
    { category: 'User Account', items: ['Updating profile information', 'Changing password', 'Managing payment information'] },
    { category: 'Troubleshooting', items: ['Common issues and how to resolve them', 'Contacting support for further assistance'] },
    { category: 'Privacy and Security', items: [" Information about the app's privacy policy", 'Tips for keeping your account secure'] },
  ];

  const renderItem = ({ item }: { item: { category: string, items: string[] } }) => (
    <View style={{paddingTop:30}}>
      <Text style={commonStyles.itemHeader}>{item.category}</Text>
      
      <FlatList
        data={item.items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={commonStyles.itemText}>{`• ${item}`}</Text>
        )}
      />
      
    </View>
  );

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
            style={{ width: 26, height: 26, resizeMode: 'contain' }}
          />
        </TouchableOpacity>
        <Text style={commonStyles.textstyle}>Help Center</Text>
      </View>
      <View style={styles.paracontainer}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
      </View>
    </View>
  );
};

export default HelpCenterScreen;

const styles = StyleSheet.create({
  paracontainer: {
    backgroundColor: 'rgba(247, 247, 247, 0.7)',
    paddingHorizontal: 20,
    paddingBottom:30,
    borderRadius: 20,
    marginHorizontal: 30,
    marginTop: 20, 
  },
});
