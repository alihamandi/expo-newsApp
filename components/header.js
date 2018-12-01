import React , {Component} from 'react';
import {View ,Image} from 'react-native';

export default class Header extends Component {
    render(){
        return(
            <View style={{height:60,backgroundColor:'#f9f9f9',flexDirection:'column'}}>
                <Image source = {require('../assets/1.png')} style={{height:'80%',width:'20%',alignSelf:'center',marginTop:15}}/>
            </View>
        )
    }
}