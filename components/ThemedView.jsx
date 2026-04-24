import { useColorScheme, View } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";

const ThemedView = ({ style,safe=false, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  
  if(safe){
    return (
      <SafeAreaView style={[{ backgroundColor: theme.background }, style]} {...props} />
    );
  }else{
    return (
      <View style={[{ backgroundColor: theme.background }, style]} {...props} />
    );
  }
};

export default ThemedView;

// import { View, useColorScheme } from 'react-native'
// import { Colors } from '../constants/Colors'

// const ThemedView = ({style,...props}) => {
//   const colorScheme = useColorScheme()
//   const theme = Colors[colorScheme] ?? colorScheme.light
//   return (
//     <View style={[{backgroundColor: theme.background},style]}
//     {...props}
//     />
//   )
// }

// export default ThemedView
