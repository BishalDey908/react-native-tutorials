import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'

import ThemedView from "../components/ThemedView"
import ThemedText from "../components/ThemedText"
import ThemedLogo from "../components/ThemedLogo"
import Spacer from "../components/Spacer"
import { Colors } from '../constants/Colors'
import { useEffect } from 'react'
import { account } from '../lib/appwrite'

// WHAT: An asynchronous function to test the connection
const testAppwriteConnection = async () => {
  try {
    console.log("Attempting to connect to Appwrite...");
    
    // WHY: We ask Appwrite for the current user's session data
    const session = await account.get();
    
    // WHAT: If it succeeds, it means we are connected AND logged in
    console.log("🟢 Connection Success! You are connected and logged in.", session);

  } catch (error) {
    // WHY: If we hit the catch block, it means Appwrite responded with an error, 
    // OR our app couldn't reach Appwrite at all. We need to check which one it is.
    
    // WHAT: Check if the error is a 401 Unauthorized
    if (error.code === 401) {
      // 🚨 CRITICAL LOGIC: A 401 error actually means SUCCESS for our connection test!
      // It means your app successfully reached the Appwrite cloud, Appwrite checked your 
      // credentials, and accurately replied, "I see you, but you aren't logged in."
      console.log("🟢 Connection Success! Appwrite is talking to us (but no user is logged in).");
    } else {
      // WHAT: Any other error means the connection actually failed.
      console.error("🔴 Connection Failed. Please check your .env variables and package name.");
      console.error("Error details:", error.message);
    }
  }
};

// You can call this function inside a useEffect hook when the app loads, 
// or attach it to an onPress event of a button.

const Home = () => {
  testAppwriteConnection()
  useEffect(()=>{
  },[])
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo />
      <Spacer />

      <ThemedText style={styles.title} title={true}>The Number 1</ThemedText>

      <ThemedText style={{ marginTop: 10, marginBottom: 30 }}>
        Reading List App
      </ThemedText>

      <Link href="/login" style={styles.link}>
        <ThemedText>Login</ThemedText>
      </Link>

      <Link href="/register" style={styles.link}>
        <ThemedText>Register</ThemedText>
      </Link>

      <Link href="/profile" style={styles.link}>
        <ThemedText>Profile</ThemedText>
      </Link>

    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    marginVertical: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  },
})