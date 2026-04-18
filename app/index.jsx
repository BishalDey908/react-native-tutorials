import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import { Link } from "expo-router";

import Logo from "../assets/icon.png";
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo style={styles.img} />
      <Spacer />
      <ThemedText style={[styles.title, { color: "purple" }]} title={true}>
        The Number 1
      </ThemedText>
      <Spacer />
      <ThemedText>Reading List App</ThemedText>

      {/* <View style={styles.card}>
        <Text>This is a card</Text>
      </View> */}

      <View style={styles.button}>
        <Link href="/login">
          <ThemedText style={styles.buttonText}>Login Page</ThemedText>
        </Link>
      </View>

      <View style={styles.button}>
        <Link href="/register">
          <ThemedText style={styles.buttonText}>Register Page</ThemedText>
        </Link>
      </View>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  // card:{
  //   backgroundColor:"#eee",
  //   padding:20,
  //   borderRadius:5,
  //   boxShadow:"0 2px 4px rgba(0,0,0,0.1)",
  //   marginTop:20,
  // },
  img: {
    height: 55,
    width: 55,
    marginVertical: 20,
  },
  button: {
    marginTop: 50,
    padding: 20,
    fontSize: 25,
    backgroundColor: "blue",
    color: "white",
    borderRadius: 50,
  },
  buttonText: {
    color: "white",
  },
});
