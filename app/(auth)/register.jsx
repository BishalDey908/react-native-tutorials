import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import { Link } from "expo-router";
import Spacer from "../../components/Spacer";
import ThemedButton from "../../components/ThemedButton";

const register = () => {
  const handleSubmit = () => {
    console.log("Register form submited");
  };
  return (
    <ThemedView style={styles.container}>
      <ThemedText title={true} style={styles.title}>
        Register Here
      </ThemedText>

      <ThemedButton onPress={handleSubmit}>
        <Text style={styles.btnText}>Register</Text>
      </ThemedButton>

      <Spacer height={100} />
      <Link href="/login">
        <ThemedText style={{ textAlign: "center" }}>
          Login to your account
        </ThemedText>
      </Link>
    </ThemedView>
  );
};

export default register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems:"center"
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
