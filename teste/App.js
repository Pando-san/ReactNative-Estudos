import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import base64 from 'react-native-base64';

let texto = "Dogday da a bunda pro Pando";
let txtb64 = base64.encode(texto);
let txtdec = base64.decode(txtb64);

console.log("Texto Codificado: ", txtb64);
console.log("Texto Decodificado: ", txtdec);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!
        <Image source={require('expo/snack-static/react-native-logo.png')}></Image>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
