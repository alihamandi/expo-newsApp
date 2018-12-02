import React , {Component} from 'react';
import {View,TextInput,StyleSheet} from 'react-native';

export default class SearchBar extends Component {
    render(){
        return(
            <View style={styles.searchStyle}>
                <TextInput placeholder='search a topic' style={styles.inputStyle}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    searchStyle:{
        flex:0.1,
        backgroundColor:'#f9f9f9'
    },
    inputStyle:{
        fontSize:17,
        backgroundColor:'#e9e9e9',
        paddingTop:5,
        paddingBottom:5,
        marginTop:18,
        marginLeft:20,
        marginRight:20,
        paddingLeft:15,
        paddingRight:15,
        borderRadius:30
    }
})