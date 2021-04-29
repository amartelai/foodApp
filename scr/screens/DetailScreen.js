import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, FlatList, Image} from 'react-native';
import yelp from '../api/yelp';

const DetailScreen = ({navigation}) => {
  const [detail, setDetail] = useState(null);
  const id = navigation.getParam('id');

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setDetail(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!detail) {
    return null;
  }

  return (
    <View>
      <Text> ASDAS</Text>
      <FlatList
        data={detail.photos}
        keyExtractor={mm => mm}
        renderItem={({item}) => {
          return <Image style={styles.image} source={{uri: item}} />;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});

export default DetailScreen;
