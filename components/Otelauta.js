import * as React from 'react';
import {
    Alert,
    View,
    StyleSheet,
} from 'react-native';

import { luoVäliTagitKielelle, Välit } from '../apu/Apu';
import { ScrollView } from 'react-native-gesture-handler';

export default class Otelauta extends React.Component {

    constructor() {
        super();
        this.välit = new Välit()
        this.välit.merkitseVälit('c')
    }

    handlePress(evt) {
        console.disableYellowBox = false;

        Alert.alert('moi ville ja janne');
    }
 
    render() {
        return (
            <ScrollView alwaysBounceVertical={false} alwaysBounceHorizontal={false} indicatorStyle='black'>
                <View styles={styles.otelauta}>
                    <View style={styles.kieli}>
                        {this.välit.annaVälitagitKielelle(1)}
                    </View>
                    <View style={styles.kieli}>
                        {this.välit.annaVälitagitKielelle(2)}
                    </View>
                    <View style={styles.kieli}>
                        {this.välit.annaVälitagitKielelle(3)}
                    </View>
                    <View style={styles.kieli}>
                         {this.välit.annaVälitagitKielelle(4)}
                    </View>
                    <View style={styles.kieli}>
                        {this.välit.annaVälitagitKielelle(5)}
                    </View>
                    <View style={styles.kieli}>
                        {this.välit.annaVälitagitKielelle(5)}
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    otelauta: {
        flex: 1,
        flexDirection: 'column',
    },
    kieli: {
        flex: 1,
        flexDirection: 'row',
    },
});
