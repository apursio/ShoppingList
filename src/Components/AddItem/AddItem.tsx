// AddItem.tsx

import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton, Text, TextInput } from 'react-native-paper';
import uuid from 'react-native-uuid';
import { ShoppingListItem } from '../../../App';
import { saveShoppingList } from '../../Utils/ShoppingListUtils';

interface Props {
    shoppingList: ShoppingListItem[];
    setShoppingList: (shoppingList: ShoppingListItem[]) => void;
}

// add item to shopping list
const AddItem: React.FC<Props> = ({shoppingList, setShoppingList}) => {
    const [item, setItem] = useState<string>('')
    const [quantity, setQuantity] = useState<string>('')
    const addItem = () => {
        if(!item) { // checking that there is input
            console.log("Item cannot be empty")
        } else {
            const newItem = {item, quantity: quantity || '1', id: uuid.v4() };
            setShoppingList([...shoppingList, newItem])
            saveShoppingList([...shoppingList, newItem])
            setItem('')
            setQuantity('')
        }
    };

    return(
        <View style={styles.container}>
            <Text variant="headlineMedium">Add Item to List</Text>
            <TextInput
                label="Item Name"
                value={item}
                mode="outlined"
                style={styles.containerInputText}
                onChangeText={(item) => setItem(item)}
                placeholder='Type name here'
            />
            <TextInput
                label="Quantity"
                value={quantity}
                mode="outlined"
                style={styles.containerInputText}
                onChangeText={(quantity) => setQuantity(quantity)}
                keyboardType='numeric'
                placeholder='Type quantity'
            />
              <IconButton
                icon="plus"
                mode='contained'
                animated={true}
                size={20}
                onPress={() => addItem()}
            />
        </View>
    );   
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#313638'
      },
      containerInputText: {
        width: "80%",
        margin: 5,
      }
})

export default AddItem