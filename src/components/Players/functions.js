import React from 'react';

// Function to match the countries API names with the football API nationality
const sortFlags = (name, nativeName, nationality, flag, index) => {

  // Flags name on the countries API
  const countryName = name.toLowerCase(); // flag.name
  const countryNativeName = nativeName.toLowerCase(); // flag.nativeName

  // Player nationality on the football API
  const player = nationality.toLowerCase(); // data.nationality

  const condition1 = countryNativeName === player;

  const condition2 = countryName === player;

  // match all the countries located in united kingdom                      
  const condition3 = countryNativeName === 'united kingdom'
    && player === 'england' ||
    countryNativeName === 'united kingdom'
    && player === 'wales' ||
    countryNativeName === 'united kingdom'
    && player === 'scotland' ||
    countryNativeName === 'united kingdom'
    && player === 'northern ireland';

  const condition4 = countryName === 'bosnia and herzegovina'
    && player === 'bosnia-herzegovina';

  const condition5 = countryName === "côte d'ivoire"
    && player === "cote d'ivoire";

  const condition11 = countryName === 'cabo verde'
    && player === 'cape verde';

  const condition9 = countryName === 'new caledonia'
    && player === 'neukaledonien';

  const condition10 = countryName === 'gambia'
    && player === 'the gambia';

  const condition6 = countryNativeName === '대한민국'
    && player === 'korea, south';

  const condition7 = countryNativeName === 'république démocratique du congo'
    && player === 'congo dr';

  const condition8 = countryNativeName === 'curaçao'
    && player === 'curacao';

  const condition12 = countryNativeName === 'македонија'
    && player === 'macedonia'

  const condition13 = countryName === 'russian federation'
    && player === 'russia'


  const conditions = condition1 || condition2 || condition3 ||
    condition4 || condition5 || condition6 ||
    condition7 || condition8 || condition9 ||
    condition10 || condition11 || condition12 ||
    condition13

  if (conditions) {
    return <img src={flag} alt="drapeau" key={index} className="flag" /> //flag.flag
  }
}

export default sortFlags;