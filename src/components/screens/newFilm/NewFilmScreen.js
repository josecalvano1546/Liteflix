import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';
import { themeApp } from '../../../styles/themeApp';

// Redux
import { useDispatch } from 'react-redux';
import { myFilmsAdd } from '../../../../redux/actions/myFilmsAction';

// Components
import Progress from '../../progressBar/ProgressBar';
import ButtonWithBorder from '../../buttonWithBorder/ButtonWithBorder';
import ButtonBackground from '../../buttonBackground/ButtonBackground';
import TopBarScreen from '../../topBarScreens/TopBarScreens';

// Library
import ImagePicker from 'react-native-image-crop-picker';

// Images
import Clip from '../../../assets/images/iconsApp/clip.png';

const NewFilmScreen = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const [cancelar, setCancelar] = useState(false);
  const [loadFile, setLoadFile] = useState(false);
  const [text, onChangeText] = useState('');
  const [image, setImage] = useState();
  const dispatch = useDispatch();

  // get image from galery
  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 600,
      height: 400,
      cropping: true,
      cropperCircleOverlay: false,
      includeBase64: true,
    })
      .then(image => {
        setIndex(0);
        setImage('data:image/jpeg;base64,' + image.data);
        setLoadFile(true);
      },100)
      .catch(function (error) {
        console.log('Error load image' + error.message);
      });
  };

  // Add new film to redux
  const addFilm = () => {
    dispatch(myFilmsAdd(image, text));
    navigation.navigate('Succesfully', { titulo: text });
  };
  // clean controls
  const setVar = () => {
    setLoadFile(false);
    setIndex(0);
    setCancelar(false);
    onChangeText('');
  };

  // Animation Progress bar
  useEffect(() => {
    const interval = setInterval(() => {
      if (index >= 10) {
        setIndex(10);
      } else {
        setIndex((index + 1) % (10 + 1));
      }
    }, 300);
    return () => {
      clearInterval(interval);
    };
  }, [index]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      // clean controls
      setVar();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={[themeApp.backgroundStyle, style.container]}>
      <TopBarScreen navigation={navigation} />
      <View style={style.title}>
        <Text
          style={[
            themeApp.TitleTextLightGreen,
            { paddingBottom: themeApp.hp('7%') },
          ]}>
          Agregar película
        </Text>
      </View>
      <View
        style={{
          flex: 0.5,
          justifyContent: 'center',
        }}>
        {!loadFile ? (
          <TouchableOpacity
            onPress={choosePhotoFromLibrary}
            style={style.addFimContainer}>
            <View style={{ flexDirection: 'row' }}>
              <View
                style={{
                  width: themeApp.wp(3.5),
                  height: themeApp.wp(3.5),
                  marginLeft: '2%',
                }}>
                <Image
                  resizeMode="contain"
                  style={{ width: null, flex: 1 }}
                  source={Clip}
                />
              </View>
              <Text style={themeApp.textRegular}> Agregar un archivo </Text>
            </View>
          </TouchableOpacity>
        ) : (
          <>
            <View style={[{ paddingHorizontal: themeApp.wp('5%') }]}>
              <Progress
                step={index}
                steps={10}
                height={10}
                cancelar={cancelar}
              />
            </View>

            <View
              style={{
                width: themeApp.wp('100%'),
                alignItems: 'flex-end',
                paddingHorizontal: themeApp.wp('5%'),
              }}>
              <TouchableOpacity
                style={style.cancelarButton}
                disabled={index === 10 && !cancelar}
                onPress={() => {
                  setIndex(10);
                  setCancelar(!cancelar);
                  if (cancelar) {
                    setIndex(0);
                  }
                }}>
                <Text
                  style={
                    index === 10 && !cancelar
                      ? themeApp.textRegularGreen
                      : themeApp.textRegular
                  }>
                  {index === 10 && !cancelar
                    ? '¡Listo!'
                    : cancelar
                    ? 'Reintentar'
                    : 'Cancelar'}
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
      <View
        style={{
          flex: 0.8,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TextInput
          style={[themeApp.textRegular, style.textInput]}
          onChangeText={onChangeText}
          placeholderTextColor={themeApp.placeholder}
          value={text}
          placeholder="Titulo"
        />
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ButtonBackground
          title={'Subir pelicula'}
          disabled={!(index === 10 && !cancelar && loadFile && text.length > 1)}
          onPress={() => {
            addFilm();
          }}
        />
        <ButtonWithBorder
          onPress={() => {
            setVar();
          }}
          title={'Salir'}
        />
      </View>
    </View>
  );
};
export default NewFilmScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: '10%',
    paddingBottom: '6%',
  },
  title: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  addFimContainer: {
    width: themeApp.wp('87%'),
    height: themeApp.hp('10%'),
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  cancelarButton: {
    width: themeApp.wp('30%'),
    height: themeApp.wp('10%'),
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  textInput: {
    width: themeApp.wp('67.5%'),
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
    borderBottomColor: '#FFFFFF',
    textAlign: 'center',
  },
});
