import React, {useState} from 'react';
import {Text, StyleSheet, ScrollView, Button} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [errorMessage, results, searchApi] = useResults();

  const searchByPrice = price => {
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text> {errorMessage} </Text> : null}

      <ScrollView>
        <ResultList filter={searchByPrice('$')} title="Cost Effective" />
        <ResultList filter={searchByPrice('$$')} title="Bet Pricer " />
        <ResultList filter={searchByPrice('$$$')} title="Big Spender" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
