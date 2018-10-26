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
    this.setState(state => ({ ...state, väärin: 0 }))
		console.log(this.state.tila)
		this.seuraavaKysymys()
	}

	painettuLopeta(evt) {
		this.asetaPelinTila("SEIS")
		this.setState(state => ({ ...state, oikein: 0 }))
		console.log(this.state.tila)
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
		} else {
      this.setState(state => ({ ...state, väärin: state.väärin + 1 }))
    }
		console.dir(this)
		this.seuraavaKysymys()
	}

	render() {
		console.log("render: Peli")

		lopetusNappi = ""
		tilasto = ""
		if (this.state.tila === "ODOTTAA_VASTAUSTA") {
			lopetusNappi = (
				<TouchableOpacity onPress={evt => this.painettuLopeta(evt)}>
					<View style={styles.lopeta}>
						<Text>Lopeta</Text>
					</View>
				</TouchableOpacity>
			)
			tilasto = (
				<View style={styles.tilasto}>
					<Text style={styles.oikein}>
						Oikein: {this.state.oikein}
					</Text>
					<Text style={styles.väärin}>
						Väärin: {this.state.väärin}
					</Text>
				</View>
			)
		}

		aloitusNappi = ""
		if (this.state.tila === "SEIS") {
			aloitusNappi = (
				<TouchableOpacity onPress={evt => this.painettuAloita(evt)}>
					<View style={styles.aloita}>
						<Text>Aloita</Text>
					</View>
				</TouchableOpacity>
			)
		}
		tila = (
			<View style={styles.tila}>
				<Text>Tila: {this.state.tila}</Text>
			</View>
		)
		return (
			<View>
				<View style={styles.kuvaContainer}>
					<Image
						source={require("../assets/images/robot-dev.png")}
						style={styles.kuvaImage}
					/>
				</View>
				<View style={styles.napit}>
					{aloitusNappi}
					{lopetusNappi}
				</View>
				{tilasto}
				{tila}
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
    position: "absolute",
    top: 50,
    right: 20,
    width: 70,
    backgroundColor: "green"

	},
	napit: {
		marginTop: 20
	},
	oikein: {
		marginLeft: 0
	},

	väärin: {
		marginLeft: 10
	},

	tilasto: {
    position: 'absolute',
    top: 20,
    right: 220,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: "yellow"
	},

	kuvaContainer: {
    position: "absolute",
    top: 20,
    right: 20,
    width: 20,
    height: 40,
	},
	kuvaImage: {
		width: 30,
		height: 30,
		resizeMode: "contain",
		marginTop: 3,
		marginLeft: -10
	}
})
