import AsyncStorage from '@react-native-community/async-storage';

class StorageApi {
    static getData = async (key) => {
        try {
            const value = await AsyncStorage.getItem(key)
            return value
        } catch (e) {
            console.log(e)
        }
    }

    static storeData = async (key, val) => {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(val))
        } catch (e) {
            console.log(e)            
        }
    }
}

export default StorageApi