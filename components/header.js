import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.headerStyle}>
        <Image source={require("../assets/1.png")} style={styles.logoStyle} />
      </View>
    );
  }
  // headerStyle={
  //     height:60,
  //     backgroundColor:'#f9f9f9',
  //     flexDirection:'column'
  // }
  // logoStyle={
  //     height:'80%',
  //     width:'20%',
  //     alignSelf:'center',
  //     marginTop:15
  // } there is an other way using stylesheet component from react
}

const styles = StyleSheet.create({
  headerStyle: {
    height: 60,
    backgroundColor: "#f9f9f9",
    flexDirection: "column"
  },
  logoStyle: {
    height: "80%",
    width: "20%",
    alignSelf: "center",
    marginTop: 15
  }
});
