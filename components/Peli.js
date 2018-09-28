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
      tila: 'SEIS',
      korostettavaVäli: null
    }
  }

  painettuNuottia(evt) {

  }

  seuraavaKysymys() {
    let korostettavaVäli = this.arvoSeuraavaVäli()
    // välit.annaVäliInfo(korostettavaVäli)
    this.setState((state) => ({ ...state, korostettavaVäli }))
  }

  asetaPelinTila(tila) {
    this.setState(state => (
      { ...state, tila }
    ))
  }

  arvoSeuraavaVäli() {
    const arvottuVäli = {
      kieli: this.arvoLuku(1,5),
      väli: this.arvoLuku(0,3)
    }
    console.dir(arvottuVäli)
    return arvottuVäli
  }

  arvoLuku(min,max) {
    return Math.floor(Math.random() * Math.floor(max))+min;
  }

  painettuAloita(evt) {
    this.asetaPelinTila( 'KÄYNNISSÄ')
    console.log(this.state.tila)
    this.seuraavaKysymys()
    this.asetaPelinTila( 'ODOTTAA_VASTAUSTA')
  }

  componentDidMount() {
    console.log("componentDidMount Peli")
  }

  componentWillMount() {
    console.log("componentWillMount Peli")
  }

  nuottiValittu(evt,info) {
    console.dir(info)
    if(this.arvottuNuotti == info.nuotti) {
      // TODO kasvata laskuria
    }
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
          <Text>Tila: {this.state.tila}</Text>
        </View>

        <Nuottipaneeli kunPainettu={this.nuottiValittu}/>
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
