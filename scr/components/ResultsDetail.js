import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ResultsDetail = ({detail}) => {
  console.log(detail);
  return (
    <View style={styles.view}>
      <Image style={styles.image} source={{uri: detail.image_url}} />
      <Text style={styles.text}>{detail.name}</Text>
      <Text style={styles.rat}>
        {detail.rating} Stars, {detail.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    borderRadius: 4,
    height: 120,
    marginTop: 4,
    marginBottom: 6,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  rat: {
    color: 'gray',
  },
  view: {
    marginLeft: 15,
    marginBottom: 10,
  },
});

export default ResultsDetail;
