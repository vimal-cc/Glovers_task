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
});
export default commonStyles;
