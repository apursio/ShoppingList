import AsyncStorage from '@react-native-async-storage/async-storage';
import { ShoppingListItem } from '../../App';

// save operation to be used when adding or deleting items
export const saveShoppingList = async (shoppingList: ShoppingListItem[]) => {
  try {
    await AsyncStorage.setItem('shoppingList', JSON.stringify(shoppingList));
    console.log('Shopping list saved successfully');
  } catch (error) {
    console.error('Error saving shopping list:', error);
  }
};
