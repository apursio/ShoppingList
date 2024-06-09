// Footer.tsx

import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

interface Props {
    title: string;
}

const Footer: React.FC<Props> = ({title}) => {
    return(
      <Appbar.Header style={[styles.footer]} mode='center-aligned'>
        <Appbar.Content title={title} titleStyle={styles.footerTitle} />
      </Appbar.Header>
    );
    
}

const styles = StyleSheet.create({
    footer: {
      backgroundColor: '#F09D51',
      alignItems: 'center',
      },
      footerTitle: {
        fontWeight: '600',
        fontSize: 15,
        color: '#313638'
      }
})

export default Footer