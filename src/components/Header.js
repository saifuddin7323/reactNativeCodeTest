import React, {memo} from 'react';
import {View, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'skyblue',
    padding: 8,
    justifyContent: 'center',
    height: 50,
  },
  titleStyle: {color: 'white', fontSize: 24, textAlign: 'center'},
});

export const Header = memo(() => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>{'Home'}</Text>
    </View>
  );
});
