import React, { Component } from 'react'
import { Constants } from 'expo'
import { View } from 'react-native'
import Header from '../components/header'
import SearchBar from '../components/searchBar'
import NewsList from '../components/newsList'


export default class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            news: [],
        }
    }

    // componentDidMount() {
    //     fetch('./something.json')
    //         .then((results) => {
                
    //             results.json()
                
    //         }).then((news) => {
    //             console.log(news)
    //             this.setState({ news:news }) 
    //             //i could use the same name of the param of the state so js will take it as a key to set the state
    //         }).catch((err) => {
    //             console.log(err)
    //         })
    // }


    render() {
        return (
            <View style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
                <Header />
                <SearchBar />
                <NewsList news={this.state.news} />
            </View>
        )
    }
}
