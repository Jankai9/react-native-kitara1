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

    render2() {
        const nuotit = ['c', 'd']

        let n = 1
        return (
            <View>
                <View style={styles.nuottipaneeli}>
                    <Text style={styles.xxx}>a</Text>
                    <Text style={styles.xx}>a</Text>
                </View>
                <View styles={styles.nuottipaneeli}>
                    <View style={styles.xx} ><Text>a</Text></View>
                    <View style={styles.xx}><Text>b</Text></View>
                </View>
            </View>
        );
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
                            onclick={''}
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
