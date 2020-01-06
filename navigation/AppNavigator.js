import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Login from "../src/components/login/login";
import Register from "../src/components/login/register";
import Hotel from "../src/components/login/hotelList";

const LoginNavigator = createSwitchNavigator({
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  },
  Hotel: {
    screen: Hotel
  }
});

export default createAppContainer(LoginNavigator);
