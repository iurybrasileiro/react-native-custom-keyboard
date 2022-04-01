import React from 'react';
import { Keyboard, StyleSheet, TextInput, View } from 'react-native';

function App() {
  return (
    <View
      style={styles.container}
      onStartShouldSetResponder={() => {
        Keyboard.dismiss();

        return true;
      }}>
      <TextInput style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#ffffff',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#dbdbdb',
    borderRadius: 4,
  },
});

export default App;
