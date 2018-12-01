import React , {Component} from 'react';
import {View,TextInput} from 'react-native';

export default class SearchBar extends Component {
    render(){
        return(
            <View style={{flex:0.1,backgroundColor:'#f9f9f9'}}>
                <TextInput placeholder='search a topic' style={{fontSize:17,backgroundColor:'#e9e9e9', paddingTop:5,paddingBottom:5,marginTop:18,marginLeft:20,marginRight:20,paddingLeft:15,paddingRight:15,borderRadius:30}}/>
            </View>
        )
    }
}