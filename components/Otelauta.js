import * as React from "react"
import { Alert, View, StyleSheet, Image,ImageBackground } from "react-native"

import { luoVäliTagitKielelle, Välit } from "../apu/Apu"
import { ScrollView } from "react-native-gesture-handler"

export default class Otelauta extends React.Component {
	constructor(props) {
		super(props)
		console.log("constructor: Otelauta")
		// this.props.välit.merkitseVälit('c')
		this.props.välit.poistaMerkinnät()
		console.dir(this.props)
		if (this.props.korostettavaVäli) {
			this.props.välit.merkitseVälit(this.props.korostettavaVäli)
		}
	}

	componentDidMount() {
		console.log("componentDidMount Otelauta")
	}

	componentWillMount() {
		console.log("componentWillMount Otelauta")
	}

	handlePress(evt) {}

	render() {
		console.log("render: Otelauta")
		if (this.props.korostettavaVäli) {
			this.props.välit.merkitseVainVälit(this.props.korostettavaVäli)
		}
		console.dir()
		return (
			<View style={styles.pääView}>
				<ScrollView
					style={styles.ScrollView}
					alwaysBounceVertical={false}
					alwaysBounceHorizontal={true}
					indicatorStyle="black"
					contentOffset={{x: 0, y: 0}}
				>
					<Image
						source={require("../assets/images/otelauta_piirretty.png")}
						style={styles.otelautaImage}
					/>
						<View styles={styles.otelautaContainer}>
							<View styles={styles.otelauta}>
								<View style={styles.kieli1}>
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
						</View>
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	pääView: {
		marginLeft: 20,
		marginTop: 30,
		marginBottom: 30,
		backgroundColor: "blue"
	},
	scrollView: {},
	otelautaContainer: {
		backgroundColor: "yellow"
	},
	otelautaContainer: {
		marginTop: 10,
	},
	otelauta: {
		flex: 1,
		flexDirection: "column",
	},
	kieli: {
		flex: 1,
		flexDirection: "row",
		marginTop: 19
	},
	kieli1: {
		flex: 1,
		flexDirection: "row",
		marginTop: -9
	},
	otelautaImage: {
		position:'absolute',
		marginLeft: 30,
		height: "100%",
		width: "190%"
	}
})
