import AsyncStorage from '@react-native-async-storage/async-storage';

// Object
export const getData = async id => {
  try {
    const jsonValue = await AsyncStorage.getItem(id);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('Error get interno');
  }
};

export const storeData = async (id, value) => {
  try {
    await AsyncStorage.setItem(id, JSON.stringify(value));
  } catch (e) {
    console.log('Error storage interno');
  }
};

// string
export const storeString = async (id,value) => {
  try {
    await AsyncStorage.setItem(id, value)
  } catch (e) {
    console.log("Error store interno")
  }
};

export const getString = async (id) => {
  try {
    const value = await AsyncStorage.getItem(id)
    if(value !== null) {
      return value;
    }
  } catch(e) {
    console.log("Error get interno")
  }
}