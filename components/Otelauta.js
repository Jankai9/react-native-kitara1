import * as React from 'react';
import {
    Alert,
    View,
    StyleSheet,
} from 'react-native';

import { luoVäliTagitKielelle, Välit } from '../apu/Apu';
import { ScrollView } from 'react-native-gesture-handler';

export default class Otelauta extends React.Component {

    constructor(props) {
        super(props);
        console.log("constructor: Otelauta")
        // this.props.välit.merkitseVälit('c')
        this.props.välit.poistaMerkinnät()
        console.dir(this.props) 
        if(this.props.korostettavaVäli) {
            this.props.välit.merkitseVälit(this.props.korostettavaVäli)
        }
    }

    componentDidMount() {
        console.log("componentDidMount Otelauta")
    }

    componentWillMount() {
        console.log("componentWillMount Otelauta")
    }

    handlePress(evt) {
    }
  
    render() {
        console.log("render: Otelauta")
        if(this.props.korostettavaVäli) {
            this.props.välit.merkitseVainVälit(this.props.korostettavaVäli)
        }
        console.dir()
        return (
            <ScrollView alwaysBounceVertical={false} alwaysBounceHorizontal={false} indicatorStyle='black'>
                <View styles={styles.otelauta}>
                    <View style={styles.kieli}>
                        {this.props.välit.annaVälitagitKielelle(1)}
                    </View>
                    <View style={styles.kieli}>
                        {this.props.välit.annaVälitagitKielelle(2)}
                    </View>
                    <View style={styles.kieli}>
                        {this.props.välit.annaVälitagitKielelle(3)}
                    </View>
                    <View style={styles.kieli}>
                         {this.props.välit.annaVälitagitKielelle(4)}
                    </View>
                    <View style={styles.kieli}>
                        {this.props.välit.annaVälitagitKielelle(5)}
                    </View>
                    <View style={styles.kieli}>
                        {this.props.välit.annaVälitagitKielelle(6)}
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
