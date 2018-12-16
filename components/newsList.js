import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView, FlatList } from "react-native";
import NewsItem from "./newsItem";

export default class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: props.news
    };
  }
  render() {
    let { news } = this.props;
    // const newsList = news.map((newsData, i) => (
    //   <NewsItem item={newsData} key={i} />
    // ));
    return (
      <FlatList
        style={styles.listStyle}
        data={news}
        renderItem={props => <NewsItem item={props.item} />}
      />
    );
  }
}

const styles = StyleSheet.create({
  listStyle: {
    flex: 1,
    backgroundColor: "white"
  }
});
