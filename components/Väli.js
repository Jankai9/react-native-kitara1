import * as React from 'react';
import {
  Alert,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';

export default class Väli extends React.Component {
  handlePress(evt) {
    console.disableYellowBox = false;
    Alert.alert("painettu nauhaa x")
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={evt => this.handlePress(evt)}>
          <View style={[styles.väli, this.props.info.merkitty ? styles.merkitty : styles.eimerkitty]}>
            <Text>{this.props.info.nuotti}</Text>
          </View>
        </TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  väli: {
    margin: 1,
    marginTop: 0,
    width: 30,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  merkitty: {
    backgroundColor: 'red',
  },
  eimerkitty: {
    backgroundColor: 'powderblue',
  }

});
