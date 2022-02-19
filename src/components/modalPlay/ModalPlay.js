import React from 'react';
import {
  Modal,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import { themeApp } from '../../styles/themeApp';

const ModalPLay = Props => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={Props.visible}
      onRequestClose={Props.onRequestClose}>
      <TouchableHighlight
        onPress={Props.onPress}
        style={[themeApp.TouchableHighlight]}
        underlayColor="false">
        <TouchableWithoutFeedback>
          <View
            style={[
              themeApp.backgroundStyle,
              {
                width: '90%',
                flex: 0.6,
                padding: 15,
              },
            ]}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <Text style={themeApp.TitleTextLight}>
                Reproduciendo película
              </Text>
            </View>
            <View
              style={{
                flex: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AnimatedLottieView
                source={require('../../assets/animations/playFilm.json')}
                style={{ flex: 1 }}
                autoPlay={true}
                loop={true}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </TouchableHighlight>
    </Modal>
  );
};
export default ModalPLay;
