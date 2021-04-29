import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

Icon.loadFont();
const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.background}>
      <Icon name="search" style={styles.iconStyle} />
      <TextInput
        placeholder="Search"
        style={styles.text}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    marginTop: 10,
    backgroundColor: '#F0EEEE',
    alignItems: 'center',
    height: 45,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10,
  },
  text: {
    flex: 1,
    color: 'black',
    fontSize: 18,
    height: 40,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});
export default SearchBar;
