import React, { useState } from 'react';
import { ImageBackground, Text, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import { themeApp } from '../../styles/themeApp';

// Components
import ButtonWithoutBorder from '../buttonWithoutBorder/ButtonWithoutBorder';
import ButtonWithBorder from '../buttonWithBorder/ButtonWithBorder';
import ModalPLay from '../modalPlay/ModalPlay';
import Options from '../options/Options';

// Images
import Play from '../../assets/images/iconsApp/play.png';
import Plus from '../../assets/images/iconsApp/plus.png';
import Check from '../../assets/images/iconsApp/check.png';

// Utils
import { baseUrl, fileSize } from '../../../utils/constants';

const MainFilm = Props => {
  const [playMovie, setPlayMovie] = useState(false);
  const films = useSelector(state => state.films); // -->get films
  // const image ={ uri: `${baseUrl}${fileSize}${films.filmsMain[0].poster_path}` }
  const image ={ uri: `${baseUrl}${fileSize}${Props.filMain[0].poster_path}` }

  return (
    <View>
      {films.filmsMain !== null ? (
        <>
          <ImageBackground
            source={image}
            resizeMode="stretch"
            style={{ height: themeApp.hp('80%') }}>
            <LinearGradient
              locations={[0.2, 0.5, 0.6, 0.94]}
              colors={themeApp.shadowPoster}
              style={style.shadow}>
              <View style={{ marginTop: themeApp.hp('20%') }}>
                <View style={style.subTitle}>
                  <Text style={[themeApp.TitleTextLight]}>Original de </Text>
                  <Text style={[themeApp.TitleTextBold]}>Liteflix</Text>
                </View>
                <View>
                  <Text style={[themeApp.primaryText]}>
                    {films.filmsMain[0].original_title}
                  </Text>
                </View>
              </View>
              <ButtonWithoutBorder
                title={'Reproducir'}
                Image={Play}
                onPress={() => {
                  setPlayMovie(true);
                }}
              />


              <ButtonWithBorder
                title={Props.addList ? 'Agregado a mi lista' : 'Mi lista'}
                Image={Props.addList ? Check : Plus}
                onPress={() => {
                  Props.setAddList(!Props.addList);
                }}
              />
            </LinearGradient>
          </ImageBackground>
          <Options select={Props.select} setSelect={Props.setSelect} />
        </>
      ) : null}
      <ModalPLay
        visible={playMovie}
        onRequestClose={() => {
          setPlayMovie(false);
        }}
        onPress={() => {
          setPlayMovie(false);
        }}
      />
    </View>
  );
};
export default MainFilm;

const style = StyleSheet.create({
  shadow: {
    justifyContent: 'flex-end',
    flex: 1,
    alignItems: 'center',
  },
  subTitle: { flexDirection: 'row', alignSelf: 'center' },
});
