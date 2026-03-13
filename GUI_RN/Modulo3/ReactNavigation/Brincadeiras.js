import { StyleSheet, Text, View, Image, Pressable, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:17, color: "gray"}}>
        
        Pando: Veja o tamanho da minha vara! ;3

      </Text>
      <Text style={{fontSize:17, color: "orange"}}>
        
        Dogday: É realmente uma varona! :3c

      </Text>

      <Image
      source={{ uri:"https://picsum.photos/200" }}
      style={{ width:200, height: 200}}
      />

      <Pressable onPress={ () => console.log("Clicou")}>
        <Text>Bundona!</Text>
      </Pressable>

      <TextInput
      placeholder='Digite algo'
      style={{ borderWidth:0.9, padding:11}}
      />

      <Button
      title='Bata uma punheta!'
      onPress={() => alert("Cê gozou!")}
      />

    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});