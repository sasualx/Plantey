import React from 'react';
import type {Node} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../Colors';

export const Header: () => Node = () => {
  return (
    <View style={styles.bar}>
      <Text style={{fontFamily: 'Euphemia UCAS Regular 2.6.6'}}>BottomBar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
});
