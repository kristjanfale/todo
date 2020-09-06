import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';

const PodatkiOProdaji = ({ nepremicnina }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className='main--button'
        onClick={() => setOpen(!open)}
        aria-controls='podatki'
        aria-expanded={open}
      >
        Podatki o prodaji
      </button>
      <Collapse in={open} id='podatki'>
        <div className='main--body'>
          <div>
            <h4>
              Oblika prodaje:<span> {nepremicnina.oblikaProdaje}</span>
            </h4>
            <h4>
              Način prodaje:<span> {nepremicnina.načinProdaje}</span>
            </h4>
            <h4>
              Vrsta prodaje:<span> {nepremicnina.vrstaProdaje}</span>
            </h4>
            <h4>
              Zaporedna št. prodaje:
              <span> {nepremicnina.zaporednaŠtProdaje}</span>
            </h4>
            <h4>
              ID št. prodaje:<span> {nepremicnina.IdProdaje}</span>
            </h4>
          </div>
          <div>
            <h4>
              Ali gre za ponovljeno prodajo?
              {nepremicnina.prenovljenaProdaja ? (
                <span> Da</span>
              ) : (
                <span> Ne</span>
              )}
            </h4>
            <h4>
              Ali je prejšnja prodaja na portalu e-dražbe?
              {nepremicnina.prejšnjaProdajaNaPortalu ? (
                <span> Da</span>
              ) : (
                <span> Ne</span>
              )}
            </h4>
            <h4>
              Povezava na prejšnji prodajo(ID št. prodaje):
              <span> {nepremicnina.IdPrejšnjeProdaje}</span>
            </h4>
          </div>
          <div>
            <h4>
              Datum in ura začetka prodaje:
              <span> {nepremicnina.začetekProdaje}</span>
            </h4>
            <h4>
              Datum in ura konca prodaje:
              <span> {nepremicnina.konecProdaje}</span>
            </h4>
            <h4>
              Dinamično podaljševanje:
              <span> {nepremicnina.dinamičnoPodaljševanje}</span>
            </h4>
            <h4>
              Skrajni datum in ura konca prodaje z upoštevanjem dinamičnim
              podaljševanjem:
              <span> {nepremicnina.skrajniKonecProdaje}</span>
            </h4>
          </div>
          <div>
            <h4>
              Dodatni opis prodaje:
              <span> {nepremicnina.dodatniOpis}</span>
            </h4>
            <h4>
              Ocenjena vrednost:
              <span> {nepremicnina.cena}€</span>
            </h4>
            <h4>
              Korak višanja:
              <span> {nepremicnina.korakVišanja}€</span>
            </h4>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default PodatkiOProdaji;
