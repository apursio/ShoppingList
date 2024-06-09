// Header.tsx

import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar, Button, Dialog, Menu, PaperProvider, Portal, Text } from 'react-native-paper';

interface Props {
    title: string;
    clearShoppingList: () => void;
    openDialog: () => void;
}

const Header: React.FC<Props> = ({title, clearShoppingList, openDialog}) => {
  const [menuVisible, setMenuVisible] = useState(false);
  
  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  const handleClearList = () => {
    clearShoppingList();
    closeMenu();
  }

  const handleInfo = () => {
    openDialog();
    closeMenu();
  }

    return(
      <Appbar.Header style={[styles.header]} mode="center-aligned">
        <Appbar.Content title={title} titleStyle={styles.headerTitle} />
        <View style={styles.menuContainer}>
          <Menu
            visible={menuVisible}
            onDismiss={closeMenu}
            anchor={
                <Appbar.Action icon="dots-vertical" onPress={openMenu} />
            }
            style={styles.menu}
          >
            <Menu.Item onPress={handleInfo} title="Info" />
            <Menu.Item onPress={handleClearList} title="Clear list" />
          </Menu>
        </View>
      </Appbar.Header>
    );
    
}

const styles = StyleSheet.create({
    header: {
      backgroundColor: '#F09D51',
      alignItems: 'center'
      },
      headerTitle: {
        fontWeight: '600',
        color: '#313638'
      },
      menuContainer: {
        zIndex: 1000, // Ensure the menu is on top of other elements
      },
      menu: {
        zIndex: 1000, // Ensure the menu is on top of other elements
      },

})

export default Header