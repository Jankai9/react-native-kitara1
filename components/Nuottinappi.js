import * as React from 'react';
import {
  Alert,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from 'react-native';

export default class Nuottinappi extends React.Component {
  handlePress(evt) {
    console.dir(evt)
    Alert.alert("painettu nuottia "+evt.target)
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={evt => this.props.kunPainettu(evt,this.props.info)}>          
          <View style={styles.nuottinappi} >
            <Text>{this.props.info.nuotti}</Text>
          </View>
        </TouchableOpacity>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nuottinappi: {
    margin: 1, 
    marginTop: 0,
    width: 30,
    height: 30,
    backgroundColor: 'green',
    justifyContent: 'center',
  }
  
});
