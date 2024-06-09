/**
 * Shopping list App
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './src/Components/Header/Header';
import Footer from './src/Components/Footer/Footer';
import AddItem from './src/Components/AddItem/AddItem';
import ShoppingList from './src/Components/ShoppingList/ShoppingList';
import { saveShoppingList } from './src/Utils/ShoppingListUtils';
import { Button, Dialog, PaperProvider, Portal, Text } from 'react-native-paper';

export type ShoppingListItem = {
  item: string;
  quantity: string;
  id: any;
}

// test data
const testShoppingList: ShoppingListItem[] = [
  {item: "Bananas", quantity: "2", id: "102"},
  {item: "Apples", quantity: "5", id: "103"}
];

function App(): React.JSX.Element {
  const [shoppingList, setShoppinglist] = useState<ShoppingListItem[]>(testShoppingList);
  const [infoVisible, setInfoVisible] = useState(false);

  useEffect(() => {
    getShoppingList();
  }, []);

  // clear shopping list
  const clearShoppingList = () => {
    setShoppinglist([]);
    saveShoppingList([]);
    console.log("Shopping list cleared");
  }

  // delete item from shopping list
  const deleteShoppingListItem = (id: string) => {
    const updatedList = shoppingList.filter(item => item.id !== id);
    setShoppinglist(updatedList);
    saveShoppingList(updatedList);
  }

  // get shopping list
  const getShoppingList = async () => {
    try {
      const shoppingListJson = await AsyncStorage.getItem('shoppingList');
      if(shoppingListJson !== null) {
        const shoppingList = JSON.parse(shoppingListJson);
        console.log('Shopping list retrieved: ', shoppingList);
        setShoppinglist(shoppingList);
      } else {
        console.log('No shopping list found');
      }
    } catch (error) {
      console.error('Error retrieving shopping list', error)
    }
  }

  const openDialog = () => setInfoVisible(true);
  const hideDialog = () => setInfoVisible(false);

  // console.log(`ShoppingList ${JSON.stringify(shoppingList)}`)

  return (
    <PaperProvider>
      <SafeAreaView style={[styles.mainContainer]}>
        <StatusBar/>

        <View style={styles.headerContainer}>
          <Header title="Shopping List App" clearShoppingList={clearShoppingList} openDialog={openDialog}></Header>
        </View>

        <View style={styles.addItemContainer}>
          <AddItem
            shoppingList={shoppingList}
            setShoppingList={setShoppinglist}>
          </AddItem>
        </View>

        <View style={styles.listItemsContainer}>
          <ShoppingList
            shoppingList={shoppingList}
            deleteShoppingListItem={deleteShoppingListItem}>

          </ShoppingList>
        </View>

        <View style={styles.footerContainer}>
          <Footer title='&copy; Lab/TVT 2024'></Footer>
        </View>
        
      </SafeAreaView>
      <Portal>
      <Dialog visible={infoVisible} onDismiss={hideDialog} style={styles.dialogStyle}>
        <Dialog.Content>
          <Text>This is simple shopping list app created with React Native Paper</Text>
          <Button onPress={hideDialog}>Close</Button>
        </Dialog.Content>
      </Dialog>
    </Portal>
  </PaperProvider>
  );
}

// defining styles
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#E8E9EB'
  },
  headerContainer: {
    flex: 2,
    zIndex: 1000
  },
  addItemContainer: {
    flex: 5,
  },
  listItemsContainer: {
    flex: 7,
  },
  footerContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  headerComponent: {
    backgroundColor: '#F09D51',
  },
  footerComponent: {
    backgroundColor: '#F09D51', 
  },
  dialogStyle: {
    alignContent: 'center',
    backgroundColor: '#F09D51',
    zIndex: 1000,
  },
});

export default App;
