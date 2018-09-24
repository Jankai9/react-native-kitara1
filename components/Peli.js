import * as React from 'react';
import {
  Alert,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import Nuottipaneeli from '../components/Nuottipaneeli'
import Otelauta from '../components/Otelauta'

export default class Nuottinappi extends React.Component {

  constructor() {
    super();
    this.state = {
      pelin_tila: 'SEIS',
      korostettavaVäli: null
    }
  }

  painettuNuottia(evt) {
 
  }

  painettuAloita(evt) {
    this.setState(
      { ...this.state, pelin_tila: 'KÄYNNISSÄ' }
    )
    kysySeuraavaVäli()
  }

  kysySeuraavaVäli() {
    // kerrotaan otelaudalle mikä väli pitää korostaa
    let korostettavaVäli = {kieli: 1, väli: 12 }
    // let korostettavaVäli = arvoSeuraavaVäli()
    this.setState({...this.state, korostettavaVäli}) 
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={evt => this.painettuAloita(evt)}>
          <View style={styles.aloita}>
            <Text>Aloita</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.aloita}>
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
    backgroundColor: 'yellow',
  }

});
