import { useRef, useEffect } from "react";
import { Animated, Text, View } from 'react-native';

const FadeInText = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current
  
  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.Text style={{
      fontSize:20,
      textAlign: 'center',
      margin: 10,
      width: 250,
      height: 50,
      backgroundColor: 'orange',
      opacity: fadeAnim,
    }}
    >
      {props.children}
    </Animated.Text>
  );
}

export default () => {
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <FadeInText>Texto com Fade In</FadeInText>
    </View>
  )
}