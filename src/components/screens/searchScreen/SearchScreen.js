import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import { themeApp } from '../../../styles/themeApp';

// Redux
import { useSelector } from 'react-redux';

// Components
import TopBarScreen from '../../topBarScreens/TopBarScreens';
import ModalPLay from '../../modalPlay/ModalPlay';
import EmptySection from '../../emptySection/EmptySection';

// Images
import Search from '../../../assets/images/iconsTab/searchSelect.png';
import SearchFilm from '../../searchFilm/SearchFilm';

const SearchScreen = ({ navigation }) => {
  const filmsPopular = useSelector(state => state.films.filmsPopular); // -->get Popular films
  const [playMovie, setPlayMovie] = useState('');
  // Filter
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    setFilteredData(filmsPopular);
  }, []);

  // Search in flatlist
  const searchFilter = text => {
    if (text) {
      const newData = filmsPopular.filter(item => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        if (itemData.indexOf(textData) > -1) {
          return itemData.indexOf(textData) > -1;
        }
        return null;
      });
      setFilteredData(newData);
      setSearch(text);
    } else {
      // Imput empty
      setFilteredData(filmsPopular); // set all list
      setSearch(text); // text "empty"
    }
  };

  const ItemsFilms = ({ item }) => (
    <SearchFilm
      title={item.title}
      backdrop={item.backdrop_path}
      onPress={() => {
        setPlayMovie(true);
      }}
    />
  );

  // Empty list
  const EmptyOptions = () => <EmptySection text={'Titulo no encontrado'} />;
  return (
    <View style={[themeApp.backgroundStyle, style.constainer]}>
      <TopBarScreen navigation={navigation} />
      <View
        style={{
          flex: 0.4,
          justifyContent: 'flex-end',
          marginHorizontal: themeApp.wp('5%'),
        }}>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
          <View
            style={{
              width: themeApp.wp(5),
              height: themeApp.wp(5),
              marginBottom: themeApp.hp('2.5%'),
            }}>
            <Image
              resizeMode="contain"
              style={{ width: null, flex: 1 }}
              source={Search}
            />
          </View>
          <TextInput
            style={[[themeApp.textRegular, style.textInput]]}
            placeholder={'Ingrese titulo'}
            placeholderTextColor={themeApp.placeholder}
            value={search}
            underlineColorAndroid="transparent"
            onChangeText={text => searchFilter(text)}
          />
        </View>

        <Text
          style={[
            themeApp.TitleTextLight,
            {
              textAlign: 'left',
              marginTop: themeApp.hp('5%'),
              marginBottom: themeApp.hp('2%'),
            },
          ]}>
          Los mas buscados
        </Text>
      </View>

      <View style={{ flex: 1, justifyContent: 'center' }}>
        <FlatList
          style={{ flex: 1 }}
          data={filteredData.sort((a, b) => a.title.localeCompare(b.title))}
          renderItem={ItemsFilms}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={EmptyOptions}
        />
      </View>
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
export default SearchScreen;

const style = StyleSheet.create({
  constainer: {
    flex: 1,
    paddingTop: themeApp.hp('10%'),
  },
  textInput: {
    width: themeApp.wp('67.5%'),
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
    borderBottomColor: '#FFFFFF',
    textAlign: 'center',
    alignSelf: 'center',
  },
});
