import { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
} from "react-native";

import api from "../services/api";

export default class Conversor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      convertedValue: 0,
    };

    this.convert = this.convert.bind(this);
  }

  async convert() {
    Keyboard.dismiss();

    if (!this.state.value) return;

    const { moedaA, moedaB } = this.props;

    const response = await api.get(
      `/latest?apikey=fca_live_kMk0MeX9Tc8joZoyJ1ubru0WkICDU3gdg5Rki4za&base_currency=${moedaA}&currencies=${moedaB}`
    );

    this.setState({
      convertedValue: response.data.data[moedaB] * this.state.value,
    });
  }

  render() {
    const { moedaA, moedaB } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {moedaA} para {moedaB}
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => this.setState({ value })}
          keyboardType="numeric"
          placeholder="Valor a ser convertido"
        />
        <TouchableOpacity style={styles.button} onPress={this.convert}>
          <Text style={styles.buttonText}>Converter</Text>
        </TouchableOpacity>

        <Text style={styles.convertedText}>
          {this.state.convertedValue.toFixed(2)}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
  },
  input: {
    width: 280,
    height: 45,
    backgroundColor: "#CCC",
    textAlign: "center",
    marginTop: 15,
    fontSize: 20,
    color: "#000",
    borderRadius: 5,
  },
  button: {
    width: 150,
    height: 45,
    marginTop: 15,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF0000",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "bold",
  },
  convertedText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    marginTop: 15,
  },
});
