import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Hotel from "../src/components/hotel/hotelList";
import Detail from "../src/components/hotel/information";

const LoginNavigator = createSwitchNavigator({
  Hotel: {
    screen: Hotel
  },
  Detail: {
    screen: Detail
  }
});

export default createAppContainer(LoginNavigator);