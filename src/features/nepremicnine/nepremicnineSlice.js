import { createSlice } from '@reduxjs/toolkit';

export const nepremicnineSlice = createSlice({
  name: 'nepremicnine',
  initialState: [
    {
      id: 1,
      datumObjave: '10.03.2020, 11:28',
      vrstaPredmeta: 'Stanovanje',
      cena: 325000,
      korakVišanja: 1000,
      slika:
        'https://images.unsplash.com/photo-1552817445-d4a407caf7ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80',
      oblikaProdaje: 'Spletna prodaja',
      načinProdaje: 'Dražba z zvišanjem cene',
      vrstaProdaje: 'Posamična - ena nepremičnina',
      zaporednaŠtProdaje: 2,
      IdProdaje: 1312,
      prenovljenaProdaja: true,
      prejšnjaProdajaNaPortalu: true,
      IdPrejšnjeProdaje: 2323,
      začetekProdaje: '30.04.2020, 10:00',
      konecProdaje: '30.04.2020, 12:00',
      skrajniKonecProdaje: '30.04.2020, 13:00',
      dinamičnoPodaljševanje: 2,
      naslov: 'Viharjeva 22, 1000 Ljubljana, Slovenia',
      opisPredmeta:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit autem accusantium est deleniti? Non.',
      dodatniOpis: 'Kr neke',
      nadstropje: '4. nadstropje',
      sobe: 3,
      površina: 68,
      energetskaIzkaznica: 'C2',
      tipNepremičnine: 'Posamezni deli stavbe',
      letoIzgradnje: 2000,
      oznaka: 'stanovanje 5',
      prenovljeno: 'Novembra 2019',
      časOgleda: '30.03.2020, 12:00',
      ogledVodi: 'Marjan Ficko',
      višinaVarščine: 30000,
      rokZaNakaziloVarščine: '27.04.2020',
    },
  ],
  reducers: {
    // Get nepremicnine from backend here
  },
});

export const {} = nepremicnineSlice.actions;

export default nepremicnineSlice.reducer;
