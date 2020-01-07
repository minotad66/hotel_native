import React, { Component } from "react";
import { Image, StyleSheet, TextInput, AsyncStorage } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Item,
  Text,
  Button,
  Icon,
  Left,
  H2,
  Spinner,
  Right,
  View
} from "native-base";
import { FontAwesome } from "@expo/vector-icons";
export default class CardImageExample extends Component {
  state = {
    data: [],
    change: false
  };

  componentDidMount() {
    this.Data();
  }

  hotel = () => {
    this.props.navigation.navigate("Hotel");
  };
  Data = async () => {
    this.setState({ change: true });
    try {
      const value = await AsyncStorage.getItem("data");
      if (value !== null) {
        this.setState({ data: JSON.parse(value) });
      }
    } catch (error) {}
    this.setState({ change: false });
  };
  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Left>
            <Button transparent onPress={this.hotel}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
        </Header>
        <Content>
          {this.state.change == true ? (
            <Spinner />
          ) : (
            this.state.data.map(arr => (
              <Card>
                <CardItem cardBody>
                  <Image
                    source={{ uri: arr.image }}
                    style={{ height: 200, width: null, flex: 1 }}
                  />
                </CardItem>
                <CardItem>
                  <H2>{arr.name}</H2>
                </CardItem>
                <CardItem>
                  <Text>Estrellas:  </Text>
                  <Text style={styles.textColor}>
                    {arr.start}
                    <FontAwesome name="star" size={15}></FontAwesome>
                  </Text>
                </CardItem>
                <CardItem>
                  <FontAwesome name="map-marker" size={25} color="orange">
                    <Text style={styles.textColor}>  {arr.adress}</Text>
                  </FontAwesome>
                </CardItem>
              </Card>
            ))
          )}
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    marginTop: 20
  },
  textColor: {
    color: "orange",
    fontSize: 15
  }
});
