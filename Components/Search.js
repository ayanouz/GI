import React from 'react'
import { StyleSheet, View, TextInput, Button} from 'react-native'
import {  FlatList } from 'react-native'
import FilmItem from './FilmItem'
import Films from '../Helpers/FilmData'


export default class Search extends React.Component {
  render() {
    return (
      <View >
      
        <TextInput style={styles.textinput} placeholder='Titre du film'/>
        <Button title='Rechercher' onPress={() => {}}/>
        <FlatList
            data={Films}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <FilmItem film={item}/>}

/>   
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})

