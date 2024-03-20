/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  //Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Header from './src/Components/Header/Header';
import Footer from './src/Components/Footer/Footer';
import AddItem from './src/Components/AddItem/AddItem';

export type ShoppingListItem = {
  item: string;
  quantity: string;
  id: string;
}

const testShoppingList: ShoppingListItem[] = [
  {item: "Bananas", quantity: "2", id: "102"},
  {item: "Apples", quantity: "5", id: "103"}
];

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [shoppingList, setShoppinglist] = useState<ShoppingListItem[]>(testShoppingList);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  console.log(`ShoppingList ${JSON.stringify(shoppingList)}`)

  return (
    <SafeAreaView style={[styles.mainContainer, backgroundStyle]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.headerContainer}>
        <Header title="Shopping List App" mainStyles={styles.headerComponent}></Header>
      </View>

      <View style={styles.addItemContainer}>
        <AddItem
          shoppingList={shoppingList}
          setShoppingList={setShoppinglist}
          mainStyles={styles.addItemComponent}>

        </AddItem>
      </View>

      <View style={styles.listItemsContainer}>
        <Text>List Items</Text>
      </View>

      <View style={styles.footerContainer}>
        <Footer title='Lab/TVT 2024' mainStyles={styles.footerComponent}></Footer>
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  headerContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'red',
  },
  addItemContainer: {
    flex: 5,
    borderWidth: 1,
    borderColor: 'red',
  },
  listItemsContainer: {
    flex: 7,
    borderWidth: 1,
    borderColor: 'red',
  },
  footerContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'red',
  },
  headerComponent: {
    backgroundColor: 'lightcoral'
  },
  footerComponent: {
    backgroundColor: 'lightcoral'
  },
  addItemComponent: {
    //backgroundColor: 'lightcoral'
  },
});

export default App;
