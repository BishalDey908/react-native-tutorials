import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'

const Contact = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title} title={true}>
        Contact Page
      </ThemedText>

      <ThemedView style={styles.button}>
        <Link style={styles.buttonText} href="/">
          <ThemedText>Home Page</ThemedText>
        </Link>
      </ThemedView>
    </ThemedView>

    
  )
}

export default Contact

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  title:{
    fontWeight:"bold",
    fontSize:20
  },
  // card:{
  //   backgroundColor:"#eee",
  //   padding:20,
  //   borderRadius:5,
  //   boxShadow:"0 2px 4px rgba(0,0,0,0.1)",
  //   marginTop:20,
  // },
  img:{
    height: 55,
    width:55,
    marginVertical:20
  },
   button:{
    marginTop:50,
    padding: 20,
    fontSize:25,
    backgroundColor:"blue",
    color:"white",
    borderRadius: 50
  },
  buttonText:{
    color:"white"
  }
})