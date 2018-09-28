import * as React from 'react';
import {
    Alert,
    TouchableOpacity,
    View, Text,
    StyleSheet,
} from 'react-native';
import { nuottikirjaimet } from '../apu/Vakiot'
import Nuottinappi from '../components/Nuottinappi'

export default class Nuottipaneeli extends React.Component {

    constructor() {
        super();
    }

    handlePress(evt) {
        Alert.alert('valittu nuotti:' + evt);
    }


    render() {
        const nuotit = nuottikirjaimet

        let c = 1
        return (
            <View style={styles.nuottipaneeli}>
                {
                    nuotit.map((n) => (
                        <Nuottinappi
                            info={{ nuotti: n }}
                            key={'NN' + c++}
                            kunPainettu={this.props.kunPainettu}
                        />))
                }
            </View>
        );
    }

}



const styles = StyleSheet.create({
    nuottipaneeli: {
        flex: 0,
        flexDirection: 'row',
        backgroundColor: 'lightseagreen',
    },
 
});
