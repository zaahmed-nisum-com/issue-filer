import AsyncStorage from '@react-native-async-storage/async-storage';


const getLocalStorageById = async (id)=>{
   return await AsyncStorage.getItem(id)
}
const addLocalStorageyId =  async(id,data)=>{
    await AsyncStorage.setItem(id,  JSON.stringify(data))
}
const cleanLocalStorage = async ()=>{
    await AsyncStorage.clear()
}
export  {
    getLocalStorageById,
    addLocalStorageyId,
    cleanLocalStorage
}