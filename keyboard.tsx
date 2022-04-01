import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Customkeyboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Funcionou 🥳</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3772FF',
  },
  text: {
    fontSize: 18,
    fontWeight: '900',
    color: '#F7F7F7',
  },
});

export default Customkeyboard;
