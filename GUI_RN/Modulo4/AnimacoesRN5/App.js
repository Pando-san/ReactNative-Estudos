import { useState } from 'react';
import { Pressable, StyleSheet, View, Animated, Text } from 'react-native';

export default function App() {

  const [redSquareAnim] = useState(new Animated.Value(0));
  const [yellowSquareAnim] = useState(new Animated.Value(0));
  const [blueSquareAnim] = useState(new Animated.Value(0));

  const animateRed = () => {
    Animated.timing(redSquareAnim, {
      toValue: 200,
      duration: 800,
      useNativeDriver: true,
    }).start(() => redSquareAnim.setValue(0));
  };

  const animateYellow = () => {
    Animated.spring(yellowSquareAnim, {
      toValue: 200,
      speed: 10,
      bounciness: 20,
      useNativeDriver: true,
    }).start(() => yellowSquareAnim.setValue(0));
  };

  const animateBlue = () => {
  Animated.decay(blueSquareAnim, {
    velocity: 0.4,
    deceleration: 0.998,
    useNativeDriver: true,
  }).start(() => {
    Animated.timing(blueSquareAnim, {
      toValue: 200,
      duration: 300,
      useNativeDriver: true,
    }).start(() => blueSquareAnim.setValue(0));
  });
};


  return (
    <View style={styles.container}>

      <View style={styles.item}>
        <Text style={styles.label}>Timing</Text>
        <Pressable onPress={animateRed}>
          <Animated.View
            style={[
              styles.square,
              { backgroundColor: "red", transform: [{ translateY: redSquareAnim }] }
            ]}
          />
        </Pressable>
      </View>

      <View style={styles.item}>
        <Text style={styles.label}>Spring</Text>
        <Pressable onPress={animateYellow}>
          <Animated.View
            style={[
              styles.square,
              { backgroundColor: "yellow", transform: [{ translateY: yellowSquareAnim }] }
            ]}
          />
        </Pressable>
      </View>

      <View style={styles.item}>
        <Text style={styles.label}>Decay</Text>
        <Pressable onPress={animateBlue}>
          <Animated.View
            style={[
              styles.square,
              { backgroundColor: "blue", transform: [{ translateY: blueSquareAnim }] }
            ]}
          />
        </Pressable>
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  square: {
    height: 50,
    width: 50,
    marginHorizontal: 10,
  },
  item: {
    alignItems: "center",
  },
  label: {
    marginBottom: 8,
    fontWeight: "bold",
  },

});
