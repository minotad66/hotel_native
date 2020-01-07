import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Login from "../src/components/hotel/login";
import Hotel from "../src/components/hotel/hotelList";
import Detail from "../src/components/hotel/information";

const LoginNavigator = createSwitchNavigator({
  Login: {
    screen: Login
  },
  Hotel: {
    screen: Hotel
  },
  Detail: {
    screen: Detail
  }
});

export default createAppContainer(LoginNavigator);
