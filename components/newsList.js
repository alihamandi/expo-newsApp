import React , {Component} from 'react';
import {View,StyleSheet} from 'react-native';

export default class NewsList extends Component {
    render(){
        return(
            <View style={styles.listStyle}/>
        )
    }
}

const styles = StyleSheet.create({
    listStyle:{
        flex:1,
        backgroundColor:'white'
    }
})