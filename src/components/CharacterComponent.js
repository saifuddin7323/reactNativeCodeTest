import React, {memo} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const styles = StyleSheet.create({
  containerStyle: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleStyleBlue: {
    color: 'skyblue',
    fontWeight: 'bold',
  },
  titleStyleBlack: {
    color: 'black',
    fontWeight: 'bold',
    flex: 1,
    flexWrap: 'wrap',
  },
  imageStyle: {height: 80, width: 80, borderRadius: 40},
  flexRowStyle: {flexDirection: 'row'},
  flexOne: {flex: 1},
});

export const CharacterComponent = memo(
  ({
    fullName,
    title,
    imageUrl,
    containerStyle,
    imageStyle,
    headingColor,
    textColor,
  }) => {
    return (
      <View style={[styles.containerStyle, containerStyle]}>
        <View style={styles.flexOne}>
          <View style={styles.flexRowStyle}>
            <Text
              style={[
                styles.titleStyleBlue,
                headingColor && {color: headingColor},
              ]}>
              {'Name'}:{' '}
            </Text>
            <Text
              style={[styles.titleStyleBlack, textColor && {color: textColor}]}>
              {fullName?.toUpperCase()}
            </Text>
          </View>
          <View style={styles.flexRowStyle}>
            <Text
              style={[
                styles.titleStyleBlue,
                headingColor && {color: headingColor},
              ]}>
              {'Title'}:{' '}
            </Text>
            <Text
              style={[styles.titleStyleBlack, textColor && {color: textColor}]}>
              {title?.toUpperCase()}
            </Text>
          </View>
        </View>
        <Image
          style={[styles.imageStyle, imageStyle]}
          source={{uri: imageUrl}}
        />
      </View>
    );
  },
);
