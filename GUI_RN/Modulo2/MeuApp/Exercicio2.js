import React, {Component} from "react";
import {View, Text, FlatList, StyleSheet} from "react-native";

//const baseUrl = "https://api.sampleapis.com/coffee/hot";
const baseUrl = "https://jsonplaceholder.typicode.com/posts";


export default class App extends Component {

    state = {
        data: [],
        loading: false,
    };

    componentDidMount() {
        this.loadRepositories();
    }

    loadRepositories = async () => {
        if (this.state.loading) return;

        try {
        this.setState({ loading: true });

        const response = await fetch(baseUrl);
        const repositories = await response.json();

        console.log("Dados:", repositories);

        this.setState({
        data: repositories,
        loading: false,
    });
    } catch (error) {
    console.log("Erro:", error);
  }
};

    renderItem = ({ item }) => (
        <View style={styles.listItem}>
            <Text>{item.title}</Text>
        </View>
    );

    render() {
        console.log(this.state.data);
        return (
            <FlatList
                style={{ marginTop: 30 }}
                contentContainerStyle={styles.list}
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
            />
        );
    }
}

const styles = StyleSheet.create({
        list: { paddingHorizontal:20 },

        listItem: { width: "50%", backgroundColor: "#eee",
            margin: 5, padding: 20, borderColor: "black",
            borderWidth:1},
});