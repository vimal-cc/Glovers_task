import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const DropdownComponent = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const options: string[] = ['Coach', 'Staff', 'Player'];

  const handleDropdownToggle = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsDropdownVisible(false);
  };
  return (
    <View>
      <View style={styles.dropdownContainer}>
        {isDropdownVisible && (
          <View style={styles.dropdown}>
            {options.map((option, index) => (
              <TouchableHighlight
                key={index}
                onPress={() => handleOptionSelect(option)}
                underlayColor="#3485c9" // Set the background color when pressed
              >
                <Text style={styles.option}>{option}</Text>
              </TouchableHighlight>
            ))}
          </View>
        )}
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Select an option"
          value={selectedOption || ''}
          editable={false}
        />
        <TouchableOpacity onPress={handleDropdownToggle}>
          <Icon name="caretdown" size={20} color="#005dab" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    position: 'absolute',
    left: 25,
    right: 25,
    top: 50,
  },
  dropdown: {
    borderRadius: 5,
    backgroundColor: '#fff',
    elevation: 5,
    paddingVertical: 10,
    zIndex: 1,
    borderWidth: 0.3,
  },
  option: {
    fontSize: 16,
    paddingVertical: 6,
    paddingStart: 20,
  },
  textInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    marginBottom: 30,
    borderRadius: 40,
    paddingStart: 30,
    fontSize: 30,
    height: 55,
    paddingRight: 25,
  },
  textInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#000',
  },
});

export default DropdownComponent;
