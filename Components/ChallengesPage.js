import React, {useState} from 'react';
// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import {Colors} from '../Colors';

const staticImage = require("./the-creative-exchange-ixS7UCRJTdM-unsplash.jpg");

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    ImageBackground: {
      flex: 1,
      resizeMode: "cover",
      width: "100%",
      alignItems: "center",
    },
   
   });

export const ChallengesPage = ({navigation}) => {
    return (
        <View style={styles.container}>
          <ImageBackground source={staticImage} style={styles.ImageBackground}>
            {/* <StatusBar style="auto" /> */}
          </ImageBackground>
        </View>
      );
};
