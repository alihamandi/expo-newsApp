import React, { Component } from 'react'
import {View,Image,Text,StyleSheet} from 'react-native'

export default class NewsItem extends Component {


  render() {

      let {item} = this.props
      const {description,publishedAt,title,urlToImage} = item //this will deconstruct the 4 params oto the items
    return (
        <View style={style.itemStyle}>
            <Image style={{height:100,width:100}} source={{url:urlToImage}}/>
            <View>
                <Text style={{fontWeight:'bold'}}>{title}</Text>
                <Text>{description}</Text>
                <Text style={{color:'indigo'}}>{publishedAt}</Text>
            </View>
        </View>
    )
  }
}


const style = StyleSheet.create({
    itemStyle: {
        flex:1,
        fontSize: 17,
        backgroundColor: '#e9e9e9',
        paddingBottom:15,
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom:5,
        marginTop:5,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 30
    }
})