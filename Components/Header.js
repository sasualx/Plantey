import React from 'react';
import type {Node} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../Colors';

export const Header: () => Node = () => {
  return (
    <View style={styles.bar}>
      <Text>BottomBar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
});
