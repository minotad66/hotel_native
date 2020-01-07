import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";
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
  Right
} from "native-base";
import { FontAwesome } from "@expo/vector-icons";
export default class CardImageExample extends Component {
  state = {
    product: [],
    text: "",
    array: [],
    isReady: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({ isReady: true });
  }

componentDidMount() {
  fetch("https://apihotel-v1-rest.herokuapp.com/hotels")
      .then(response => response.json())
      .then(result => this.setState({ array: result, product: result }));
}

  detail = id => {
    this.save(id);
    this.props.navigation.navigate("Detail");
  };

  save = async id => {
    let ident = this.state.array.filter(arr => arr.id == id);;
    try {
    await AsyncStorage.setItem("data", JSON.stringify(ident));
    } catch (error) {
      console.log(error);
    }
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
      product: this.state.text != "" ? newData : this.state.array
    });
  };

  render() {
    return (
      <Container>
        <Header searchBar rounded style={styles.header}>
          <Item>
            <Icon name="ios-search" />
            <TextInput
              value={this.state.text}
              placeholder="Type here to translate!"
              onChangeText={text => this.filter(text)}
              value={this.state.text}
            />
          </Item>
        </Header>
        <Content>
        {this.state.product.map(arr => (
            <Card key={arr.id} style={styles.card}>
              <CardItem cardBody onPress={this.login}>
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
              <Button onPress={() => this.detail(arr.id)}>
                <Text style={styles.textCenter}>Más información</Text>
              </Button>
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
    color: "orange",
    fontSize: 15
  },
  card: {
    marginTop: 30
  },
  textCenter: {
    textAlign: "center",
    width: "100%"
  }
}); 