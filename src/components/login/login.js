//import React from "react";
import { AppLoading } from "expo";
import { StyleSheet } from "react-native";

import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  H1,
  Title,
  CardItem
} from "native-base";
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

  register = () => {
      this.props.navigation.navigate('Register')
  }

  hotel = () => {
    this.props.navigation.navigate('Hotel')
  }
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <Container>
        <Header>
          <Title style={styles.title}>Formulario</Title>
        </Header>
        <Content contentContainerStyle={styles.content}>
          {/* <Text style={styles.textCenter}>Inicio de sesion</Text> */}
          <H1 style={styles.textCenter}>Inicio de sesion</H1>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <CardItem footer bordered> 
          <Button primary onPress={this.register}>
            <Text> Registro </Text>
          </Button>
          <Button success onPress={this.hotel} style={styles.button}>
            <Text> Enter </Text>
          </Button>
          </CardItem>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  textCenter: {
    textAlign: "center",
    width: "100%"
  },
  content: {
    flex: 1,
    justifyContent: "center"
  },
  button: {
    marginLeft: "40%"
  },
  title: {
    marginTop: 30,
    textAlign: "left"
  },

});
