import * as React from 'react';
import {
    Alert,
    TouchableOpacity,
    Text,
    View,
    StyleSheet,
    Image,
} from 'react-native';

import { Nuotit, annaVälitKielelle, annaVälit } from '.././apu/Vakiot';
import { ScrollView } from 'react-native-gesture-handler';

export default class Otelauta extends React.Component {

    constructor() {
        super();
    }

    handlePress(evt) {
        Alert.alert('valittu nuotti:');
    }
 
    render() {
        return (
                <View styles={styles.nuottipaneeli}>
                    <View style={styles.nuotti}>
                        // haeNuotit
                    </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    nuottipaneeli: {
        flex: 1,
        flexDirection: 'column',
    },
    nuotti: {
        flex: 1,
        flexDirection: 'row',
    },
});
