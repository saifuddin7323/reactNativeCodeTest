/**
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, SectionList} from 'react-native';
import {CharacterComponent, Header, SectionHeader} from './src/components';
import {getCharacterData} from './src/networking';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  sectionListStyle: {
    backgroundColor: 'white',
  },
});

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setSectionListData();
  }, []);

  const setSectionListData = async () => {
    const characterSectionList = await getCharacterData();
    setData(characterSectionList);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <SectionList
        contentContainerStyle={styles.sectionListStyle}
        sections={data}
        ListHeaderComponent={Header}
        keyExtractor={(item, index) => item?.id + index}
        renderItem={({item}) => <CharacterComponent {...item} />}
        renderSectionHeader={({section: {title}}) => {
          const length = data?.find(item => item?.title === title);
          return <SectionHeader title={title} length={length?.data?.length} />;
        }}
      />
    </SafeAreaView>
  );
};

export default App;
