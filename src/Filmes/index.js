import React, { Component } from "react"
import { StyleSheet, View, Text } from 'react-native'

export default class Filmes extends Component{
  constructor(props){
    super(props)
    this.state = {
      filmes: this.props.data
    }
  }
  render(){
    return(
      <View style={styles.areaFilmes}>
        <Text>{this.state.filmes.nome}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  areaFilmes: {

  }
})