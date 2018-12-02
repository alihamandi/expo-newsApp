import React, { Component } from 'react'
import {View,Image,Text,StyleSheet} from 'react-native'

export default class NewsItem extends Component {

  render() {

      let {item} = this.props
      const {description,publishedAt,title,urlToImage} = item //this will deconstruct the 4 params oto the items
    return (
        <View key={key.i} style={flex=1}>
            <Image source={{url:urlToImage}}/>
            <View>
                <Text>{title}</Text>
                <Text>{description}</Text>
                <Text>{publishedAt}</Text>
            </View>
        </View>
    )
  }
}
