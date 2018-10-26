import * as React from "react"
import {
	TouchableOpacity,
	Text,
	View,
	StyleSheet,
	Image,
	ImageBackground
} from "react-native"
import Peli from '../components/Peli'

export default class Aloitusnäyttö extends React.Component {
	constructor() {
		super()
		// this.state=({toiminto: 'aloitusnäyttö'})
	}

	painettuAloita(evt) {
		this.setState(state => ({ ...state, toiminto: "peli" }))
		console.log(this.state.toiminto)
	}

	componentWillMount() {
		console.log("componentDidMount")
		this.state = { toiminto: "aloitusnäyttö" }
	}

	render() {
		console.log("render Aoitusnäyttö")
		console.log(this.state.toiminto)

		if (this.state.toiminto === "aloitusnäyttö") {
			rend = (
				<View style={styles.kuvaContainer}>
					<ImageBackground
						source={require("../assets/images/aloituskuva_vaaka.png")}
						style={styles.aloituskuvaImage}
					>
						<TouchableOpacity
							style={styles.aloita}
							onPress={this.painettuAloita.bind(this)}
						/>
					</ImageBackground>
				</View>
			)
		}

		if (this.state.toiminto === 'peli')
		{ rend = <Peli />}

		return (
			<View>
				{rend}
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
		backgroundColor: "rgba(52, 52, 52, 0.3)"
	}
})
