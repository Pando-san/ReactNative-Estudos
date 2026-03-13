import { StyleSheet, Text, View, Button, SafeAreaView, Animated } from 'react-native';
import React, { Component } from 'react';

class App extends Component {

  state = {
    fadeAnim: new Animated.Value(0)
  };

  fadeIn = () => {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  fadeOut = () => {
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Animated.View style={ [ styles.fadingConteiner,
          { opacity: this.state.fadeAnim }]}>
          <Text style={styles.fadingText}>Fading View!</Text>
        </Animated.View>

        <View style={styles.buttonRow}>
          <Button title="Fade In View" onPress={this.fadeIn} />
          <Button title="Fade Out" onPress={this.fadeOut} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingConteiner: {
    padding: 20, backgroundColor: "powderblue"
  },
  fadingText: {
    fontSize: 28
  },
  buttonRow: {
    flexBasis: 100, justifyContent: "space-evenly",
    marginVertical: 16
  }
});

export default App;
