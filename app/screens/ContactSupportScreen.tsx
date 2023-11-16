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

const ContactSupportScreen = ({navigation}: any) => {
  const data = [
    {key: 'Email', value: 'tracysaul@fraziersports.com'},
    {
      key: 'Address',
      value: "Glover's Scorebooks\n6600 Broad Avenue\nWaco, TX 76712",
    },
    {key: 'Phone Number', value: '254-776-3605'},
    {key: 'Fax', value: '254-776-9187'},
  ];

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Text style={commonStyles.itemHeader}>{item.key}</Text>
      <Text
        style={[
          commonStyles.itemText,
          item.key === 'Phone Number' || item.key === 'Fax'
            ? commonStyles.underlined_text
            : null,
        ]}>
        {item.value}
      </Text>
    </View>
  );

  return (
    <View style={commonStyles.container}>
      <StatusBar
        translucent
        backgroundColor="#fff"
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
        <Text style={commonStyles.textstyle}>Contact Support</Text>
      </View>
      <View style={styles.paracontainer}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.key}
        />
      </View>
    </View>
  );
};
export default ContactSupportScreen;

const styles = StyleSheet.create({
  paracontainer: {
    backgroundColor: 'rgba(247, 247, 247, 0.7)',
    paddingHorizontal: 20,
    paddingTop: 45,
    borderRadius: 20,
    marginHorizontal: 30,
    marginTop: 40,
  },
  itemContainer: {
    paddingBottom: 45,
  },
});
