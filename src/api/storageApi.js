import AsyncStorage from '@react-native-community/async-storage';

class StorageApi {
    getData = async (key) => {
        try {
            const value = await AsyncStorage.getItem(key)
            return value
        } catch (e) {
            console.log(error)
        }
    }

    storeData = async (key, val) => {
        try {
            await AsyncStorage.setItem(key, val)
            return await this.getData(key) 
        } catch (e) {
            console.log(error)            
        }
    }
}

export default StorageApi