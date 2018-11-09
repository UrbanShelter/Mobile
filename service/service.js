import {db} from './auth';
import { AsyncStorage } from "react-native"

export async function saveData(collection,doc,obj) {
    
    var data = await db.collection(collection).doc(doc).set(obj);
    console.log(data);
    return true;
  
}


export async function storeItem(key, item) {
    try {
        var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
        return jsonOfItem;
    } catch (error) {
      console.log(error.message);
    }
}



export async function retrieveItem(key) {
    try {
      const retrievedItem =  await AsyncStorage.getItem(key);
      const item = JSON.parse(retrievedItem);
      return item;
    } catch (error) {
      console.log(error.message);
    }
    return
  }