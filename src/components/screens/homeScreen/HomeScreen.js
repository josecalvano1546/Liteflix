import React, { useEffect, useState } from 'react';
import { View, FlatList, Animated, StyleSheet } from 'react-native';

// Redux
import { themeApp } from '../../../styles/themeApp';
import { useSelector, useDispatch } from 'react-redux';
import { myFilmsGet } from '../../../../redux/actions/myFilmsAction';
import {
  getFilmMain,
  getPopularFilms,
} from '../../../../redux/actions/filmsAction';

// Components
import MainFilm from '../../mainFilm/MainFilm';
import PopularFilms from '../../popularFilms/PopularFilms';
import TopBarHome from '../../topBarHome/TopBarHome';
import Splash from '../../splash/Splash';
import EmptySection from '../../emptySection/EmptySection';
import SplashScreen from 'react-native-splash-screen';
// Animation
const scrolly = new Animated.Value(0);

const HomeScreen = ({ navigation }) => {
  const films = useSelector(state => state.films); // -->get films
  const filmsMain = useSelector(state => state.films.filmsMain); // -->get main fils
  const filmsPopular = useSelector(state => state.films.filmsPopular); // -->get Popular films
  const myFilms = useSelector(state => state.myFilms.myFilmsGet); // --> Get my films  from storage
  const [popularFilm, setPopularFilm] = useState(null);
  const [select, setSelect] = useState('Populares'); // set default
  const [addList, setAddList] = useState(false);

  const dispatch = useDispatch();
  const onRefresh = () => {
    if (select === 'Populares') {
      dispatch(getPopularFilms());
    } else {
      dispatch(myFilmsGet());
    }
  };
  useEffect(() => {
    if (select === 'Populares') {
      // Get images "Populares" from API
      dispatch(getFilmMain());
      dispatch(getPopularFilms());
    } else {
      // Get images "Mis Peliculas"
      dispatch(myFilmsGet());
    }
  }, [select]);

  useEffect(() => {
    // Get the first 4 movies
    if (films.filmsPopular !== null && select === 'Populares') {
      setPopularFilm(films.filmsPopular.slice(1, 5));
    }
  }, [filmsPopular]);

  // Hide splash
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  // Popular films component
  const ItemsFavoriteFilms = ({ item }) => (
    <PopularFilms
      title={item.title}
      average={item.vote_average}
      date={item.release_date}
      poster={item.poster_path}
      backdrop={item.backdrop_path}
      select={select}
      image={item.film}
    />
  );

  // Outstanding film
  const ItemMainFilm = () => (
    <MainFilm
      select={select}
      setSelect={setSelect}
      addList={addList}
      setAddList={setAddList}
      filMain={filmsMain}
    />
  );

  // Empty list
  const EmptyOptions = () => (
    <EmptySection text={'No posee peliculas en la sección seleccionada'} />
  );
  return (
    <View style={[style.container, themeApp.backgroundStyle]}>
      <TopBarHome scrolly={scrolly} navigation={navigation} />
      {films.loading ||
      films.filmsPopular === null ||
      films.filmsMain === null ? (
        <Splash />
      ) : (
        <FlatList
        bounces={false}
          scrollEventThrottle={16}
          onScroll={e => {
            scrolly.setValue(e.nativeEvent.contentOffset.y);
          }}
          style={[themeApp.backgroundStyle,{ flex: 1 }]}
          data={select === 'Populares' ? popularFilm : myFilms}
          renderItem={ItemsFavoriteFilms}
          keyExtractor={(item, index) => index.toString()}
          ListHeaderComponent={ItemMainFilm}
          onRefresh={() => {
            onRefresh();
          }}
          refreshing={films.loading}
          ListEmptyComponent={EmptyOptions}
        />
      )}
    </View>
  );
};
export default HomeScreen;
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
