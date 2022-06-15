import React from "react";
// import Card from "./../public/card";
// var data = require("./../../../menu.json");
var city = [
  "Paris",
  "Colombes",
  "Bois-Colombes",
  "Asnières-sur-Seine",
  "Courbevoie",
  "Boulogne-Billancourt",
  "Antony",
  "Bagneux",
  "Chatillon",
  "Clamart",
  "Clichy",
  "Clamart",
  "Fontenay-aux-Roses",
  "Issy-les-Moulinoux",
  "Gennevilliers",
  "Nanterre",
  "Montrouge",
  "Puteaux",
  "Saint-cloud",
  "Sevres",
  "Rueil-Malmaison",
  "Neuilly-sur-Seine",
  "Levallois-Perret",
  "Meudon",
  "La Garenne-Colombes",
  "Vanves",
  "Vaucresson",
  "Ville-d'Avray"
];

function Nearest() {
  return (
    <div style={{ margin: "0 80px" }}>
      <div className="displayflex" style={{ justifyContent: "space-between" }}>
        <div style={{ fontSize: 26 }}>Les villes près de chez vous</div>
        <div className="linkStyle">Voir les 500+ villes</div>
      </div>
      <div className="gridCity">
        {city.map(item => (
          <p>{item}</p>
        ))}
      </div>

      <hr className="hrStyle" />
    </div>
  );
}

export default Nearest;
