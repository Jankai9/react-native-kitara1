import * as React from 'react';
import {
  Alert,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';
import Nuottipaneeli from '../components/Nuottipaneeli'
import Otelauta from '../components/Otelauta'

export default class Peli extends React.Component {

  constructor() {
    super();
    console.log("constructor Peli")
    this.state = {
      pelin_tila: 'SEIS',
      korostettavaVäli: { kieli: 1, väli: 1 }
    }
  }

  painettuNuottia(evt) {

  }

  seuraavaKysymys() {
    // kerrotaan otelaudalle mikä väli pitää korostaa
    let korostettavaVäli = this.arvoSeuraavaVäli()
    // let korostettavaVäli = arvoSeuraavaVäli()
    this.setState((state) => ({ ...state, korostettavaVäli }))
  }

  arvoSeuraavaVäli() {
    const arvottuVäli = {
      kieli: this.getRandomInt(5),
      väli: this.getRandomInt(3)
    }
    return arvottuVäli
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }


  painettuAloita(evt) {
    // näin voidaan päivittää useita tilapäivityksiä: parametri on vanha tila
    this.setState((state) => (
      { ...state, pelin_tila: 'KÄYNNISSÄ' }
    ))
    console.log(this.state.pelin_tila)
    this.seuraavaKysymys()
  }

  componentDidMount() {
    console.log("componentDidMount Peli")
  }

  componentWillMount() {
    console.log("componentWillMount Peli")
  }


  render() {
    console.log("render: Peli")
    return (

      <View>
        <View style={styles.kuvaContainer}>
          <Image
            source={
              require('../assets/images/robot-dev.png')
            }
            style={styles.kuvaImage}
          />
        </View>

        <TouchableOpacity onPress={evt => this.painettuAloita(evt)}>
          <View style={styles.aloita}>
            <Text>Aloita</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.tila}>
          <Text>Tila: {this.state.pelin_tila}</Text>
        </View>

        <Nuottipaneeli />
        <Otelauta korostettavaVäli={this.state.korostettavaVäli} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  aloita: {
    margin: 1,
    marginTop: 0,
    width: 80,
    height: 20,
    backgroundColor: 'blue',
  },
  tila: {
    margin: 1,
    marginTop: 0,
    width: 80,
    height: 20,
    backgroundColor: 'yellow',
  },
  kuvaContainer: {
    alignItems: 'center',
    marginTop: 13,
    marginBottom: 3,
  },
  kuvaImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
});
