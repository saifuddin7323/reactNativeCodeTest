import React, {memo} from 'react';
import {View, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  containerStyle: {flexDirection: 'row', backgroundColor: 'black', padding: 8},
  titleStyle: {color: 'white', fontSize: 18, fontWeight: 'bold'},
});

export const SectionHeader = memo(({title, length}) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>{title}</Text>
      <Text style={styles.titleStyle}>{': ' + length}</Text>
    </View>
  );
});
