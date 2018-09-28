import Väli from '../components/Väli'
import * as React from 'react';
import UUIDGenerator from 'react-native-uuid-generator';
import { nuottikirjaimet } from '../apu/Vakiot'

let nauhaLkm = 21

function getRandom() {
    let ret = 1
    console.dir(UUIDGenerator)
    UUIDGenerator.getRandomUUID((uuid) => {
        ret = uuid
    });
    return ret
}

class Välitieto {
    constructor(nuotti, oktaavi, kieli, väli) {
        this.nuotti = nuotti
        this.oktaavi = oktaavi
        this.kieli = kieli
        this.väli = väli
    }
}

export class Välit {
    constructor() {
        this.välit = teeVälitKielelle(1, 'e', 3)
        this.välit.push(...teeVälitKielelle(2, 'h', 3))
        this.välit.push(...teeVälitKielelle(3, 'g', 2))
        this.välit.push(...teeVälitKielelle(4, 'd', 2))
        this.välit.push(...teeVälitKielelle(5, 'a', 1))
        this.välit.push(...teeVälitKielelle(6, 'e', 1))
        console.dir(this.välit)
    }

    // merkitään kaikki tietyt nuotit
    merkitseVälit(nuotti) {
        this.välit.forEach(väli => {
            if (väli.nuotti == nuotti) {
                väli.merkitty = true
            }
        });
    }

    merkitseVälit(merkittäväVäli) {
        this.välit.forEach(väli => {
            if (väli.kieli == merkittäväVäli.kieli &&
                väli.väli == merkittäväVäli.väli) {
                väli.merkitty = true
                return
            }
        });
    }

    merkitseVainVälit(merkittäväVäli) {
        this.poistaMerkinnät()
        this.merkitseVälit(merkittäväVäli)
    }

    poistaMerkinnät() {
        this.välit.forEach(väli => {
            väli.merkitty = false
            return
        }
        );
    }

    annaVälitKielelle(kieli) {
        return this.välit.filter(väli => väli.kieli == kieli)
    }

    annaVälitagitKielelle(kieli) {
        const välit = this.annaVälitKielelle(kieli)
        const välitagit = this.annaVäliTagit(välit)
        return välitagit
    }

    annaVäliTagit(välit) {
        const väliTagit = välit.map((v) => (<Väli info={v} key={id++} />))
        return väliTagit
    }
}

id = 1


// palauttaa kaikki otelaudan välit
// väli 0 on vapaa kieli
function teeVälitKielelle(kieli, aloitusNuotti, oktaavi) {
    // eka kieli alkaa E:stä
    const nuotitKielelle1 = []
    let kaikkiNuotit = [...nuottikirjaimet, ...nuottikirjaimet, ...nuottikirjaimet, ...nuottikirjaimet]
    let aloitusIndeksi = kaikkiNuotit.findIndex((nuotti) => nuotti == aloitusNuotti)
    let kaikkiVälit = []

    for (let väli = 0; väli < nauhaLkm; väli++) {
        let nuotti = kaikkiNuotit[aloitusIndeksi + väli]
        const välitieto = new Välitieto(nuotti, 1, kieli, väli)
        kaikkiVälit.push(välitieto)
    }
    return kaikkiVälit
}
