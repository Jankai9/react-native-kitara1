import * as React from "react"
import {
	TouchableOpacity,
	Text,
	View,
	StyleSheet,
	Image,
	ImageBackground
} from "react-native"

export default class Aloitusnäyttö extends React.Component {
	constructor() {
		super()
		this.setState({näyttö: 'aloitusnäyttö'})
	}

	painettuAloita(evt) {
		this.asetaPelinTila("KÄYNNISSÄ")
		this.setState(state => ({ ...state, oikein: 0 }))
		console.log(this.state.tila)
	}

	render() {
		console.log("render: Peli")
		return (
			<View>
				<View style={styles.kuvaContainer}>
					<ImageBackground
						source={require("../assets/images/aloituskuva_vaaka.png")}
						style={styles.aloituskuvaImage}
					>
						<TouchableOpacity style={styles.aloita}>
						</TouchableOpacity>
					</ImageBackground>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	kuvaContainer: {
		alignItems: "center",
		marginTop: 0,
		marginBottom: 0,
		height: "100%",
		width: "100%"
	},
	aloituskuvaImage: {
		marginTop: 0,
		marginLeft: 0,
		height: "100%",
		width: "100%"
	},

	aloita: {
		marginTop: 60,
		marginLeft: 200,
		height: 200,
		width: 70,
		backgroundColor: 'rgba(52, 52, 52, 0.3)',
		
	}
})
