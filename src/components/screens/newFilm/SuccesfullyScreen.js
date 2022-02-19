import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { themeApp } from '../../../styles/themeApp';

// Components
import ButtonBackground from '../../buttonBackground/ButtonBackground';
import TopBarScreen from '../../topBarScreens/TopBarScreens';

// Redux
import { myFilmsGet } from '../../../../redux/actions/myFilmsAction';
import { useDispatch } from 'react-redux';

const SuccesfullyScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      dispatch(myFilmsGet());
      navigation.goBack();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View
      style={[
        themeApp.backgroundStyle,
        { flex: 1, paddingTop: themeApp.hp('30%'), alignItems: 'center' },
      ]}>
      <TopBarScreen navigation={navigation} />
      <View style={{ paddingHorizontal: themeApp.wp('5%') }}>
        <Text
          style={[
            themeApp.TitleTextLight,
            { marginBottom: themeApp.hp('6%') },
          ]}>
          ¡Felicitaciones!
        </Text>
        <Text style={[themeApp.textRegular, { textAlign: 'center' }]}>
          {route.params.titulo} fue correctamente subida
        </Text>
      </View>
      <View style={{ marginTop: themeApp.hp('20%') }}>
        <ButtonBackground
          title={'Ir a home'}
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
      </View>
    </View>
  );
};
export default SuccesfullyScreen;
