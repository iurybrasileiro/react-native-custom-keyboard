import React from 'react';
import {AppRegistry, View, Text, StyleSheet} from 'react-native';

function Customkeyboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Funcionou :)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3772FF',
  },
  text: {
    fontSize: 16,
  },
});

AppRegistry.registerComponent('customkeyboard', () => Customkeyboard);
