import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking
} from "react-native";

export default class NewsItem extends Component {
  openArticle(url) {
    console.log(url);
    // Linking.getInitialURL()
    //   .then(url => {
    //     if (url) {
    //       console.log("Initial url is: " + url);
    Linking.openURL(url).catch(err => console.error("An error occurred", err));
  }
  //       })
  //       .catch(err => console.error("An error occurred", err));
  //   }

  render() {
    let { item } = this.props;
    const { description, publishedAt, title, urlToImage, url } = item; //this will deconstruct the 4 params into the items
    return (
      <TouchableOpacity
        onPress={() => this.openArticle(url)}
        style={style.itemStyle}
      >
        <Image
          style={{ height: 100, width: 100 }}
          resizeMode="cover"
          source={{ uri: urlToImage || "unsplash.it/200/200" }}
        />
        <View>
          <Text style={{ fontWeight: "bold" }}>{title}</Text>
          <Text>{description}</Text>
          <Text style={{ color: "indigo" }}>{publishedAt}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const style = StyleSheet.create({
  itemStyle: {
    flex: 1,
    fontSize: 17,
    backgroundColor: "#e9e9e9",
    paddingBottom: 15,
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 5,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10
  }
});
