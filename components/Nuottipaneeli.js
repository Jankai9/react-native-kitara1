import * as React from 'react';
import {
    Alert,
    TouchableOpacity,
    Text,
    View,
    StyleSheet,
    Image,
} from 'react-native';
import { nuottikirjaimet } from '../apu/Vakiot'
import Nuottinappi from '../components/Nuottinappi'

export default class Nuottipaneeli extends React.Component {

    constructor() {
        super();
    }

    handlePress(evt) {
        Alert.alert('valittu nuotti:');
    }

    render() {
        const nuotit = ['c', 'd']

        return (
           
            <View styles={styles.nuottipaneeli}>
                { 
                    nuotit.map((v) => (
                        <Nuottinappi  
                            info={{ nuotti: 'C' }} 
                            key={'NN' } /> ))
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    nuottipaneeli: {
        flex: 1,
        flexDirection: 'row',
    },
});
