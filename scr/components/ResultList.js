import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetail from './ResultsDetail';
import {withNavigation} from 'react-navigation';

const ResultList = ({title, filter, navigation}) => {
  if (!filter.length) {
    return null;
  }
  return (
    <View>
      <Text style={styles.title}> {title}</Text>
      <FlatList
        data={filter}
        keyExtractor={k => k.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
              <ResultsDetail detail={item} photo={item} />
            </TouchableOpacity>
          );
        }}
        horizontal
      />
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default withNavigation(ResultList);
