import * as React from 'react';
import {
    Alert,
    TouchableOpacity,
    Text,
    View,
    StyleSheet,
    Image,
} from 'react-native';

import { Nuotit, annaVälitKielelle, annaVälit } from '../apu/Apu';
import { ScrollView } from 'react-native-gesture-handler';

export default class Otelauta extends React.Component {

    constructor() {
        super();
        this.kieliTagit1 = annaVälit(1, 'e', 5);
        this.kieliTagit2 = annaVälit(2, 'h', 5);
        this.kieliTagit3 = annaVälit(3, 'g', 4);
        this.kieliTagit4 = annaVälit(4, 'd', 4);
        this.kieliTagit5 = annaVälit(5, 'a', 3);
        this.kieliTagit6 = annaVälit(6, 'e', 3);
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
                        {this.kieliTagit1}
                    </View>
                    <View style={styles.kieli}>
                        {this.kieliTagit2}
                    </View>
                    <View style={styles.kieli}>
                        {this.kieliTagit3}
                    </View>
                    <View style={styles.kieli}>
                        {this.kieliTagit4}
                    </View>
                    <View style={styles.kieli}>
                        {this.kieliTagit5}
                    </View>
                    <View style={styles.kieli}>
                        {this.kieliTagit5}
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
