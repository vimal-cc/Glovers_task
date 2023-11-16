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


const LeagueSettingsScreen = ({ navigation }: any) => {
  const data = [
    { id:1, items: "Age/Grade Eligibility: Specifying the ages or grades eligible to play in the league." },
    { id:2, items: "Roster Size: The number of players allowed on a team's roster." },
    { id:3, items: "Game Length: The number of innings or time limit for each game." },
    { id:4, items: "Pitching Rules: Regulations for pitcher usage, including innings limits, days of rest, and pitch counts." },
    { id:5, items: "Base Running Rules: Guidelines for running the bases, such as stealing, sliding, and leading off." },
    { id:6, items: "Batting Order: The rules for determining the batting order, including whether to use a continuous lineup or substitutions." },
    { id:7, items: "Field Dimensions: The specifications for the size of the field, including the distance from the pitcher's mound to home plate and the outfield fence distances." },
    { id:8, items: "Equipment: The required equipment for each player, including bats, gloves, helmets, and catcher's gear." },
    { id:9, items: "Umpiring: The process for selecting and training umpires, and the rules for their duties and responsibilities." },
    { id:10, items: "Umpiring: The process for selecting and training umpires, and the rules for their duties and responsibilities." },
    { id:11, items: "Umpiring: The process for selecting and training umpires, and the rules for their duties and responsibilities." },
  ];

  const renderItem = ({item}) => (
    <View style={{paddingTop:10}}>
      <Text style={commonStyles.itemText}>{`• ${item.items}`}</Text>
      
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
      <View style={[commonStyles.headcontainer,{paddingBottom:10}]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/images/left_chevron.png')}
            style={{ width: 26, height: 26, resizeMode: 'contain' }}
          />
        </TouchableOpacity>
        <Text style={commonStyles.textstyle}>League Settings</Text>
      </View>
      <View style={styles.paracontainer}>
      <FlatList
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item)=> item.id}
        renderItem={renderItem}
      />
      </View>
    </View>
  );
};

export default LeagueSettingsScreen;

const styles = StyleSheet.create({
  paracontainer: {
    backgroundColor: 'rgba(247, 247, 247, 0.7)',
    paddingStart: 20,
    paddingEnd:10,
    paddingVertical:20,
    borderRadius: 20,
    marginHorizontal: 30,
    marginBottom:20
  },
});
