import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Pressable, Animated, Image } from 'react-native';

export default function App() {
  const [mostrandoImagem, setMostrandoImagem] = useState(false);

  const fadeAnim = useRef(new Animated.Value(1)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const toggle = () => {
    // fade-out + scale-out
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 0, duration: 300, useNativeDriver: true }),
      Animated.timing(scaleAnim, { toValue: 0.8, duration: 300, useNativeDriver: true }),
    ]).start(() => {
      setMostrandoImagem(!mostrandoImagem);
      // fade-in + scale-in
      Animated.parallel([
        Animated.timing(fadeAnim, { toValue: 1, duration: 300, useNativeDriver: true }),
        Animated.timing(scaleAnim, { toValue: 1, duration: 300, useNativeDriver: true }),
      ]).start();
    });
  };

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim, transform: [{ scale: scaleAnim }], flex: 1, width: "100%" }}>
        {!mostrandoImagem ? (
          <Pressable onPress={toggle} style={styles.center}>
            <Text style={styles.texto}>Toque aqui!</Text>
          </Pressable>
        ) : (
          <Pressable onPress={toggle} style={styles.imagemContainer}>
            <Image
              source={{ uri: "https://static1.e621.net/data/sample/9f/58/9f588242b15cb952787b9d49c9929109.jpg" }}
              style={styles.imagem}
            />
          </Pressable>
        )}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    fontSize: 24,
    color: "blue",
  },
  imagemContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imagem: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
  },
});