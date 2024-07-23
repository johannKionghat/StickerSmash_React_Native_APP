import { View, Image } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

export default function EmojiSticker({ imageSize, stickerSource }) {
    const scaleImage = useSharedValue(imageSize);
    const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
        if (scaleImage.value !== imageSize * 2) {
        scaleImage.value = scaleImage.value * 2;
        }
    });
    const imageStyle = useAnimatedStyle(() => {
        return {
          width: withSpring(scaleImage.value),
          height: withSpring(scaleImage.value),
        };
      });
      

  return (
    <View style={{ top: -350 }}>
       <Animated.Image
        source={stickerSource}
        resizeMode="contain"
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
}
