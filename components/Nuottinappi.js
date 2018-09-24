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
        <TouchableOpacity onPress={evt => this.handlePress(evt)}>          
          <View style={styles.nuottinappi}>
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
    height: 20,
    backgroundColor: 'green',
  }
  
});
