import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";
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
  Right,
  Input
} from "native-base";
import { FontAwesome } from "@expo/vector-icons";
export default class CardImageExample extends Component {
  state = {
    product: "",
    text: "",
    array: []
  };

  componentDidMount() {
    fetch("https://app.fakejson.com/q", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token: "qn4JQJjcuUPfEfvLZq48Zw",
        data: {
          _repeat: 50,
          id: "cryptoUUID",
          name: "companyName",
          image: "personAvatar",
          start: "numberInt|0,5",
          price: "numberInt|0,100000",
          status: "productOrderStatus"
        }
      })
    })
      .then(response => response.json())
      .then(result => this.setState({ array: result }));
  }

  login = () => {
      this.props.navigation.navigate('Login')
  }

  render() {
    return (
      <Container>
        <Header searchBar rounded style={styles.header}>
        <Left>
            <Button transparent onPress={this.login}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content>
          {this.state.array.map(arr => (
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
                <Left>
                  <Text>
                    {arr.start}{" "}
                    <FontAwesome name="star" size={15}></FontAwesome>{" "}
                  </Text>
                </Left>
                <Right>
                  <Text>Precio por noche</Text>
                  <Text>ARS {arr.price}</Text>
                </Right>
              </CardItem>
            </Card>
          ))}
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    header: {
      marginTop: 20
    }
  });
  