// List.tsx

import React from "react";
import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import { ShoppingListItem } from "../../../App";
import { Avatar, IconButton } from "react-native-paper";

interface Props {
    shoppingList: ShoppingListItem[];
    deleteShoppingListItem: (idx:string) => void;
}

type ItemProps = {
  title: string
  quantity: string
  id: string
  deleteShoppingListItem: (idx:string) => void;
};

// defining one item on shopping list
const Item = ({title, quantity,id, deleteShoppingListItem}: ItemProps) => (
  <View style={styles.item}>
    <Avatar.Text 
      size={32} 
      label={quantity} 
      style={{
        backgroundColor: '#F06543',
        marginRight: 10,}}>
    </Avatar.Text>
    <Text style={styles.title}>{title}</Text>
    <IconButton
      icon="delete"
      size={32}
      iconColor='#F06543'
      onPress={() => deleteShoppingListItem(id)}>
    </IconButton>
  </View>
);

// using FlatList to show the whole shopping list
const ShoppingList: React.FC<Props> = ({shoppingList, deleteShoppingListItem}) => {
  const renderItem = ({ item }: {item: ShoppingListItem }) => (
    <Item 
      title = {item.item}
      quantity= {item.quantity}
      id = {item.id}
      deleteShoppingListItem={deleteShoppingListItem}
    />  
  );
    return (
        <FlatList
          data={shoppingList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#E0DFD5',
      color: '#F06543',
      padding: 10,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 24,
      color: '#313638'
    },
  });

  export default ShoppingList;