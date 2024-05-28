import { Header } from '@/components/Header';
import * as C from './styles'
import Notifications from '../../assets/notifications.svg'
import Sign from '../../assets/sign.svg'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
} from "react-native-reanimated";
import { useEffect } from 'react';
import { Button } from '@/components/Button';

export const EnableNotifications = () => {
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withRepeat(
      withSequence(
        withTiming(15, { duration: 1500 }),
        withTiming(-15, { duration: 1500 })
      ),
      -1,
      true
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: `${rotation.value}deg` }],
    };
  });

  return (
    <C.Container>
      <Header logoOnly />

      <C.Center>
        <Animated.View
          style={[
            { position: "absolute", zIndex: 1, left: 50, top: -15 },
            animatedStyle,
          ]}
        >
          <Sign />
        </Animated.View>
        <Notifications />

        <C.Title>Não perca um passo!</C.Title>
        <C.SubTitle>Receba notificações de eventos e listas</C.SubTitle>

        <Button activeOpacity={0.9} title='Receba notificações' />
      </C.Center>
    </C.Container>
  );
}