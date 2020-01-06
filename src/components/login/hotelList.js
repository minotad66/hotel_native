import React, { Component } from "react";
import { Image, StyleSheet, TextInput } from "react-native";
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
  Right
} from "native-base";
import { FontAwesome } from "@expo/vector-icons";
export default class CardImageExample extends Component {
  state = {
    product: [],
    text: "",
    array: []
  };

  componentDidMount() {
    fetch("https://apihotel-v1-rest.herokuapp.com/hotels")
      .then(response => response.json())
      .then(result => this.setState({ array: result, product: result }));
  }

  login = () => {
    this.props.navigation.navigate("Login");
  };

  filter = text => {
    this.setState({ text });
    let texto = this.state.text;
    const data = this.state.array;
    const newData = data.filter(item => {
      const itemData = item.name.toUpperCase();
      const textData = texto.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      product: this.state.text != '' ? newData : this.state.array
    });
    console.log(this.state.product);
    
  };

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
            <TextInput
              value={this.state.text}
              placeholder="Type here to translate!"
              onChangeText={
                text => this.filter(text)
              }
              value={this.state.text}
            />
          </Item>
        </Header>
        <Content>
          {this.state.product.map(arr => (
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
                  <Text style={styles.textColor}>Estrellas:</Text>
                  <Text style={styles.textColor}>
                    {arr.start}{" "}
                    <FontAwesome name="star" size={15}></FontAwesome>{" "}
                  </Text>
                </Left>
                <Right>
                  <Text>Precio por noche</Text>
                  <Text style={styles.textColor}>ARS {arr.price}</Text>
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
  },
  textColor: {
    color: 'orange',
    fontSize: 15
  }
});
