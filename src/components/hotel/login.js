import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import React, { Component } from "react";

export default class FloatingLabelExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({ isReady: true });
  }

  hotel = () => {
    this.props.navigation.navigate('Hotel')
  }
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    else{
      return this.hotel
    }
  }
}