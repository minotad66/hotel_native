import React, { Component } from "react";
import { Image, StyleSheet, AsyncStorage } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Icon,
  Left,
  H2,
  Spinner,
  Body,
  Title,
  Footer,
  DeckSwiper,
  Thumbnail
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
        <Header style={styles.header}>
          <Left>
            <Button transparent onPress={this.hotel}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Informacíon Hotel</Title>
          </Body>
        </Header>
        <Content>
          {this.state.change == true ? (
            <Spinner />
          ) : (
            this.state.data.map(arr => (
              <Card>
                <CardItem>
                  <H2>{arr.name}</H2>
                </CardItem>
                <CardItem>
                  <Text>Estrellas: </Text>
                  <Text style={styles.textColor}>
                    {arr.start}
                    <FontAwesome name="star" size={15}></FontAwesome>
                  </Text>
                </CardItem>
                <CardItem>
                  <FontAwesome name="map-marker" size={25} color="orange">
                    <Text style={styles.textColor}> {arr.adress}</Text>
                  </FontAwesome>
                </CardItem>
                {arr.image.map(img => (
                  <CardItem cardBody style={styles.header}>
                    <Image
                      source={{ uri: img }}
                      style={{ height: 200, width: null, flex: 1 }}
                    />
                  </CardItem>
                ))}
              </Card>
            ))
          )}
        </Content>
        <Footer>
          <Text style={styles.footer}>
            <FontAwesome name="copyright" size={15} color="white"></FontAwesome>
            Hotel Native
          </Text>
        </Footer>
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
  mapa: {
    height: 300
  },
  footer: {
    margin: 15,
    textAlign: "center",
    width: "100%",
    color: "white"
  }
});
