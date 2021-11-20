import React from 'react';
import type {Node} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../Colors';

export const BottomBar: () => Node = () => {
  return (
    <View style={styles.bar}>
      <Text>BottomBar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bar: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
});
