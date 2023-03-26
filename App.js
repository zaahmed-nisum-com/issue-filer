import react, {useState,useEffect} from'react'
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import CreateIssue from './forms/CreateIssue';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {generatePdf} from './utils/GeneratePDF';
import {getLocalStorageById} from './utils/localStorage';
import IssueList from './pages/Issues/List'

const { StorageAccessFramework } = FileSystem;
export default function App() {

  const data = {
      name: 'Divyesh Barad',
      email: 'divyesh@gmail.com',
      address: 'Rajkot',
  }

  const html = `
  <html>
      <body>
          <h2>Hi ${data.name}</h2>
          <h4>Email: ${data.email}</h4>
          <h4>Address: ${data.address}</h4>
      </body>
  </html>
  `;
 
useEffect(()=>{
},[])
  
  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      {/* <Button
          title='generate Pdf'
          onPress={()=>generatePdf(html)}
        /> */}
        <IssueList/>
     {/* <CreateIssue/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
