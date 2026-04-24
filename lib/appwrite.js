import { Client, Account } from 'react-native-appwrite';

// 1. Initialize the client
const client = new Client();

// 🚨 MENTOR TRICK: Log the variables to see if they are blank!
console.log("My Endpoint is:", process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT);
console.log("My Project ID is:", process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID);

// 2. Configure the client
client
    .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT) 
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID);

// 3. Export the account tool so Home.jsx can use it
export const account = new Account(client);