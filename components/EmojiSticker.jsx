import { View, Image } from 'react-native';

  const AnimatedView = Animated.createAnimatedComponent(View);
  const imageStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value),
    };
  });

export default function EmojiSticker({ imageSize, stickerSource }) {
  return (
    <AnimatedView style={{ top: -350 }}>
      <TapGestureHandler onGestureEvent={onDoubleTap} numberOfTaps={2}>
      <Image
        source={stickerSource}
        resizeMode="contain"
        style={[imageStyle, { width: imageSize, height: imageSize }]}
      />
      </TapGestureHandler>
    </AnimatedView>
  );

  const onDoubleTap = useAnimatedGestureHandler({
    onActive: () => {
      if (scaleImage.value !== imageSize * 2) {
        scaleImage.value = scaleImage.value * 2;
      }
    },
  });
}