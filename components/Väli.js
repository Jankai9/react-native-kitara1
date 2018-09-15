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
          <View style={styles.väli}>
            <Text>{this.props.info.nuotti}</Text>
          </View>
        </TouchableOpacity>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  väli: {
    margin: 1,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
    width: 30,
    height: 20,
    backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'center',
  }
  
});
