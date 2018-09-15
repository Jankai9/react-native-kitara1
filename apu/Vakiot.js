import Väli from '../components/Väli'
import * as React from 'react';

let nauhaLkm = 21
export const nuottikirjaimet = ['c','c#','d','d#','e','f','f#','g','g#','a','a#','h']

class Välitieto {
  constructor(nuotti, oktaavi, kieli, väli) {
    this.nuotti = nuotti
    this.oktaavi = oktaavi
    this.kieli = kieli
    this.väli = väli
  }
}

export function annaVälit(kieli, nuotti, oktaavi) {
      const välit = annaVälitKielelle(kieli, nuotti, oktaavi)
const kieliTagit = välit.map((v) =>(<Väli info={v} /> ))
      return kieliTagit
  }

// palauttaa kaikki otelaudan välit
// väli 0 on vapaa kieli
export function annaVälitKielelle(kieli, aloitusNuotti, oktaavi) {
  // eka kieli alkaa E:stä
  const nuotitKielelle1 = []
  let kaikkiNuotit = [...nuottikirjaimet, ...nuottikirjaimet, ...nuottikirjaimet, ...nuottikirjaimet]
  let aloitusIndeksi = kaikkiNuotit.findIndex((nuotti)=>nuotti==aloitusNuotti)
  let kaikkiVälit = []

  for (let väli = 0; väli < nauhaLkm; väli++) {
      let nuotti = kaikkiNuotit[aloitusIndeksi + väli]
      const välitieto = new Välitieto(nuotti, 1,  kieli, väli)
      kaikkiVälit.push(välitieto)
    }
  console.dir(kaikkiVälit)  
  return kaikkiVälit
}
