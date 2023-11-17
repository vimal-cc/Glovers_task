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

const data = [
  {id: '1', content: 'Milwakee Brewers vs SK event is going to start'},
  {id: '2', content: 'Milwakee Brewers vs SK event is going to start'},
  {id: '3', content: 'Milwakee Brewers vs SK event is going to start'},
  {id: '4', content: 'Milwakee Brewers vs SK event is going to start'},
  {id: '5', content: 'Milwakee Brewers vs SK event is going to start'},
  {id: '6', content: 'Milwakee Brewers vs SK event is going to start'},
  {id: '7', content: 'Milwakee Brewers vs SK event is going to start'},
  {id: '8', content: 'Milwakee Brewers vs SK event is going to start'},
  {id: '9', content: 'Milwakee Brewers vs SK event is going to start'},
];

const NotificationScreen = ({navigation}: any) => {
  const renderItem = ({item}: any) => (
    <View style={styles.paracontainer}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.imgcontainer}>
          <Image
            source={require('../assets/images/Glovers_logo.png')}
            style={{width: 40, height: 40, resizeMode: 'contain'}}
          />
        </View>
        <Text style={styles.content}>{item.content}</Text>
      </View>
    </View>
  );

  return (
    <View style={commonStyles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={[commonStyles.headcontainer, {paddingBottom: 10}]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/images/left_chevron.png')}
            style={{width: 26, height: 26, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
        <Text style={commonStyles.textstyle}>Notification</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingBottom: 20}}
      />
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  paracontainer: {
    paddingEnd: 10,
    paddingVertical: 12,
    borderRadius: 15,
    marginHorizontal: 20,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#f5f5f5',
    marginVertical: 5,
  },
  imgcontainer: {
    borderWidth: 2,
    borderColor: '#f5f5f5',
    borderRadius: 5,
    marginHorizontal: 10,
  },
  content: {
    fontSize: 13,
    fontWeight: '400',
    color:'#000'
  },
});
