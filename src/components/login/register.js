import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Text,
  Input,
  ScrollView
} from "native-base";
export default class HeaderIconExample extends Component {
  state = {
    producto: "",
    text: "",
    array: []
  };

  login = () => {
    this.props.navigation.navigate("Login");
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
          name: "productName",
          price: "numberInt|0,100000",
          status: "productOrderStatus"
        }
      })
    })
      .then(r => r.json())
      .then(r => this.setState({ array: r }));
  }

  filter = event => {
    var text = event.target.value;
    const data = this.state.productoBackup;
    const newData = data.filter(function(item) {
      const itemData = item.titulo.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      producto: newData,
      text: text
    });
  };

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={this.login}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Right>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>

        <Body>
          <Text>hola</Text>
          <Input></Input>
            {this.state.array.map(r => (
              <Text>{r.name}</Text>
            ))}
        </Body>
      </Container>
    );
  }
}
