"use client";

import Framework7 from "framework7";
import Framework7React, { App as Framework7App, Block, View } from "framework7-react";
import "framework7/css/bundle";

export default function App() {
  Framework7.use(Framework7React);

  return (
    <Framework7App>
      <View main>
        <Block>Personal Finances</Block>
      </View>
    </Framework7App>
  );
}
