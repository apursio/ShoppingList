// Footer.tsx

import React from 'react';
import {
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { Appbar } from 'react-native-paper';

interface Props {
    title: string;
    mainStyles: StyleProp<ViewStyle>;
}

const Footer: React.FC<Props> = ({title, mainStyles}) => {
    return(
        <Appbar.Header style={[mainStyles, styles.footer]} mode='center-aligned'>
        {/*<Appbar.BackAction onPress={() => ('AppBar back pressed')} />*/}
        <Appbar.Action icon="copyright" onPress={() => ('AppBar info pressed')} />
        <Appbar.Content title={title} titleStyle={styles.footerTitle} />
        {/*<Appbar.Action icon="information" onPress={() => ('AppBar info pressed')} />
        <Appbar.Action icon="dots-vertical" onPress={() => ('AppBar menu pressed')} />*/}
      </Appbar.Header>
    );
    
}

const styles = StyleSheet.create({
    footer: {
        alignItems: 'center'
      },
      footerTitle: {
        fontWeight: '600',
        fontSize: 15,
        color: 'blue'
      }
})

export default Footer