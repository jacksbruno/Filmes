/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  FlatList,
} from 'react-native'
import api from './services/api'
import Filmes from './Filmes/index'

export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      filmes: []
    }
  }
  async componentDidMount(){
    const response = await api.get('r-api/?api=filmes')
    this.setState({ filmes: response.data })
  }

  render(){
    return(
      <View style={styles.container}>
        <FlatList
          data={this.state.filmes}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (<Filmes data={item} />)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
