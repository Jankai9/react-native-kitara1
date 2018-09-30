import * as React from "react"
import {
	Alert,
	TouchableOpacity,
	Text,
	View,
	StyleSheet,
	Image
} from "react-native"
import Nuottipaneeli from "../components/Nuottipaneeli"
import Otelauta from "../components/Otelauta"
import { Välit } from "../apu/Apu"

export default class Peli extends React.Component {
	constructor() {
		super()
		this.välit = new Välit()

		console.log("constructor Peli")
		this.state = {
			tila: "SEIS",
			korostettavaVäli: null
		}
	}

	painettuNuottia(evt) {}

	seuraavaKysymys() {
		const välitieto = this.arvoSeuraavaVäli()
		this.arvottuVäli = välitieto
		console.log("arvottu välitieto")
		console.dir(välitieto)
		this.setState(state => ({ ...state, korostettavaVäli: välitieto }))
		this.asetaPelinTila("ODOTTAA_VASTAUSTA")
	}

	asetaPelinTila(tila) {
		this.setState(state => ({ ...state, tila }))
	}

	arvoSeuraavaVäli() {
		const arvottuVäli = {
			kieli: this.arvoLuku(1, 5),
			väli: this.arvoLuku(0, 3)
		}
		console.dir(arvottuVäli)
		return this.välit.annaVäliTieto(arvottuVäli)
	}

	arvoLuku(min, max) {
		return Math.floor(Math.random() * Math.floor(max)) + min
	}

	painettuAloita(evt) {
		this.asetaPelinTila("KÄYNNISSÄ")
		this.setState(state => ({ ...state, oikein: 0 }))
		console.log(this.state.tila)
		this.seuraavaKysymys()
	}

	componentDidMount() {
		console.log("componentDidMount Peli")
	}

	componentWillMount() {
		console.log("componentWillMount Peli")
	}

	käsitteleNuottiValittu(evt, info) {
		console.dir(info)
		if (this.arvottuVäli.nuotti == info.nuotti) {
			console.log("oikein")
			console.log(this)
			this.setState(state => ({ ...state, oikein: state.oikein + 1 }))
		}
		console.dir(this)
		this.seuraavaKysymys()
	}

	render() {
		console.log("render: Peli")
		return (
			<View>
				<View style={styles.kuvaContainer}>
					<Image
						source={require("../assets/images/robot-dev.png")}
						style={styles.kuvaImage}
					/>
				</View>

				<TouchableOpacity onPress={evt => this.painettuAloita(evt)}>
					<View style={styles.aloita}>
						<Text>Aloita</Text>
					</View>
				</TouchableOpacity>
				<View style={styles.tila}>
					<Text>Tila: {this.state.tila}</Text>
					<Text>Oikein: {this.state.oikein}</Text>
				</View>

				<Nuottipaneeli
					kunPainettu={this.käsitteleNuottiValittu.bind(this)}
				/>
				<Otelauta
					välit={this.välit}
					korostettavaVäli={this.state.korostettavaVäli}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	aloita: {
		margin: 1,
		marginTop: 0,
		width: 80,
		height: 20,
		backgroundColor: "blue"
	},
	tila: {
		margin: 1,
		marginTop: 0,
		width: 80,
		height: 40,
		backgroundColor: "yellow"
	},
	kuvaContainer: {
		alignItems: "center",
		marginTop: 13,
		marginBottom: 3
	},
	kuvaImage: {
		width: 30,
		height: 30,
		resizeMode: "contain",
		marginTop: 3,
		marginLeft: -10
	}
})
