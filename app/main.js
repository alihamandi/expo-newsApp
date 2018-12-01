import React, { Component } from 'react'
import {Constants} from 'expo'
import {View} from 'react-native'
import Header from '../components/header'
import SearchBar from '../components/searchBar'
import NewsList from '../components/newsList'

export default class Main extends Component {
  render() {
    return (
      <View style={{flex:1,marginTop:Constants.statusBarHeight}}>
        <Header/>
        <SearchBar/>
        <NewsList/>
      </View>
    )
  }
}
