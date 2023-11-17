import {StyleSheet} from 'react-native';

const commonStyles = StyleSheet.create({
  label: {
    position: 'absolute',
    top: -10,
    left: 30,
    backgroundColor: '#fff',
    shadowColor: '#fff',
    fontSize: 14,
    paddingHorizontal: 6,
    color: 'black',
    fontWeight: '500',
    elevation: 1,
    zIndex: 1,
  },
  textinput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    marginBottom: 30,
    borderRadius: 40,
    paddingStart: 30,
    fontSize: 17,
    height: 55,
    paddingRight: 20,
    zIndex: 0,
    backgroundColor: '#fff',
    color: 'black',
  },
  underlined_text: {
    fontSize: 16,
    fontWeight: '500',
    color: '#005dab',
    textDecorationLine: 'underline',
    textDecorationColor: 'blue',
    textDecorationStyle: 'solid',
  },
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
  textstyle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
    marginStart: 30,
    letterSpacing: 0.5,
  },
  headcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop:40,
    paddingBottom: 30,
    paddingHorizontal:25
  },
  bgimg:{
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  itemHeader: {
    color: '#000',
    fontSize: 20,
    fontWeight: '700',
    paddingBottom: 7,
  },
  itemText: {
    color: '#000',
    fontSize: 17,
    fontWeight: '400',
    lineHeight:23
  },
});
export default commonStyles;
