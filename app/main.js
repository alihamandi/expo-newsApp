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

    componentDidMount() {
       this.newSearch('iraq')
    }

    newSearch(value){
        fetch(`https://newsapi.org/v2/everything?q=${value}&sortBy=publishedAt&apiKey=1304dda50b3c4066b642db00ccf7ae98`)
        .then((results) => {
            return results.json()
        }).then((news) => {
            this.setState({
                news : news.articles
            }) 
            //i could use the same name of the param of the state so js will take it as a key to set the state
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {
        return (
            <View style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
                <Header />
                <SearchBar searchF={this.newSearch.bind(this)} />
                <NewsList news={this.state.news} />
            </View>
        )
    }
}
