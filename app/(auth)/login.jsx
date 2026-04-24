import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import { Link } from "expo-router";
import { Colors } from "../../constants/Colors";
import ThemedButton from "../../components/ThemedButton";

const login = () => {
  const handleSubmit = () => {
    console.log("Login form submited");
  };
  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Login to your account
      </ThemedText>

      <ThemedButton onPress={handleSubmit}>
        <Text style={styles.btnText}>Login</Text>
      </ThemedButton>

      <Spacer height={100} />

      <Link href="/register">
        <ThemedText style={{ textAlign: "center" }}>Register</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30,
  },
  btnText: {
    color: "#f2f2f2",
  },
});
