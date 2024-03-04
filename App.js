import { Component } from "react";
import { StyleSheet, View } from "react-native";

import Conversor from "./src/conversor";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Conversor moedaA="BRL" moedaB="USD" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
