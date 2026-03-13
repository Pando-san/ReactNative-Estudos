import * as React from 'react';
import { SafeAreaView, VirtualizedList, StyleSheet } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

const pessoas = [
  {id:101, nome:'Chester'},
  {id:102, nome:'Spencer'},
  {id:103, nome:'Harold'},
  {id:104, nome:'Darius'},
  {id:105, nome:'Richard'},
  {id:106, nome:'Dozer'},
];

const ItemView = ({nome, id}) => (
  <Card style={styles.item}>
    <Card.Content>
      <Title>{nome}</Title>
      <Paragraph>Matricula: {id}</Paragraph>
    </Card.Content>
  </Card>
);

const getCardItems = (data, index) => data[index];
const numItems = (data) => data.length;

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <VirtualizedList
        data={pessoas}
        renderItem={({ item }) => (
          <ItemView nome={item.nome} id={item.id} />
        )}
        getItemCount={numItems}
        getItem={getCardItems}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex:1,
    padding: 20,
    backgroundColor: '#ecf0f1'
  },
  item: {
    margin: 10,
    elevation: 6
  },
});

export default App;