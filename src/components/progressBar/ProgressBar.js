import React, { useEffect, useRef, useState } from 'react';
import { Animated, Text, View } from 'react-native';

// Styles
import { themeApp } from '../../styles/themeApp';

const Progress = ({ step, steps, height, cancelar }) => {
  // Animations
  const [width, setWidth] = useState(0);
  const AnimatedValue = useRef(new Animated.Value(-1000)).current;
  const reactive = useRef(new Animated.Value(-1000)).current;

  useEffect(() => {
    Animated.timing(AnimatedValue, {
      toValue: reactive,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    reactive.setValue(-width + (width * step) / steps);
  }, [step, width]);

  return (
    <>
      <Text
        style={[
          themeApp.textRegular,
          { marginBottom: '4%', width: themeApp.wp('100%') },
        ]}>
        {cancelar
          ? '¡Error! no se pudo cargar la pelicula'
          : `Cargando ${(step * 100) / steps} %`}
      </Text>
      <View style={{ height, overflow: 'hidden', justifyContent: 'center' }}>
        <View
          onLayout={e => {
            const newWidht = e.nativeEvent.layout.width;
            setWidth(newWidht);
          }}
          style={{
            height: height - height / 2,
            backgroundColor: 'rgba(255,255,255,0.5)',
          }}>
          <Animated.View
            style={{
              height,
              width: '100%',
              backgroundColor: cancelar
                ? themeApp.colorError
                : themeApp.colorSuccess,
              position: 'absolute',
              left: 0,
              top: -height * 0.25,
              transform: [
                {
                  translateX: AnimatedValue,
                },
              ],
            }}
          />
        </View>
      </View>
    </>
  );
};
export default Progress;
