import asu1 from "./images/asu1.png";
import asu2 from "./images/asu2.png";
import asu3 from "./images/asu3.png";
import asu4 from "./images/asu4.png";
import asu5 from "./images/asu5.png";
import asu6 from "./images/asu6.png";
import asu7 from "./images/asu7.png";
import asu8 from "./images/asu8.png";
import asu9 from "./images/asu9.png";
import asu10 from "./images/asu10.png";
import asu11 from "./images/asu11.png";
import asu12 from "./images/asu12.png";
import asu13 from "./images/asu13.png";
import asu14 from "./images/asu14.png";
import asu15 from "./images/asu15.png";
import asu16 from "./images/asu16.png";
import asu17 from "./images/asu17.png";
import asu18 from "./images/asu18.png";
import asu19 from "./images/asu19.png";
import asu20 from "./images/asu20.png";
import asu21 from "./images/asu21.png";
import asu22 from "./images/asu22.png";
import asu23 from "./images/asu23.png";
import asu24 from "./images/asu24.png";
import asu25 from "./images/asu25.png";
import asu26 from "./images/asu26.png";
import asu27 from "./images/asu27.png";


const getImageConditions = (
    tpaitaCount,
    toppiCount,
    paitaCount,
    farkutCount,
    legginssitCount,
    hameCount,
    lenkkaritCount,
    mustatlenkkaritCount,
    kenkäCount
  ) => [
    {
      condition: () =>
        tpaitaCount === 1 &&
        toppiCount === 0 &&
        paitaCount === 0 &&
        farkutCount === 1 &&
        legginssitCount === 0 &&
        hameCount === 0 &&
        lenkkaritCount === 1 &&
        mustatlenkkaritCount === 0 &&
        kenkäCount === 0,
        image: asu1,
      info: "Vasemmalla esimerkki miltä asu näyttäisi yhdisteltynä",
    },
    {
      condition: () =>
        tpaitaCount === 0 &&
        toppiCount === 1 &&
        paitaCount === 0 &&
        farkutCount === 0 &&
        legginssitCount === 1 &&
        hameCount === 0 &&
        lenkkaritCount === 0 &&
        mustatlenkkaritCount === 1 &&
        kenkäCount === 0,
        image: asu2,
      info: "Vasemmalla esimerkki miltä asu näyttäisi yhdisteltynä",
    },
    {
      condition: () =>
        tpaitaCount === 0 &&
        toppiCount === 0 &&
        paitaCount === 1 &&
        farkutCount === 0 &&
        legginssitCount === 0 &&
        hameCount === 1 &&
        lenkkaritCount === 0 &&
        mustatlenkkaritCount === 0 &&
        kenkäCount === 1,
        image: asu3,
      info: "Vasemmalla esimerkki miltä asu näyttäisi yhdisteltynä",
    },
    {
      condition: () =>
      tpaitaCount === 0 &&
      toppiCount === 0 &&
      paitaCount === 1 &&
      farkutCount === 0 &&
      legginssitCount === 0 &&
      hameCount === 1 &&
      lenkkaritCount === 1 &&
      mustatlenkkaritCount === 0 &&
      kenkäCount === 0,
      image: asu4,
    info: "Vasemmalla esimerkki miltä asu näyttäisi yhdisteltynä",
  },
  {
    condition: () =>
    tpaitaCount === 0 &&
    toppiCount === 0 &&
    paitaCount === 1 &&
    farkutCount === 0 &&
    legginssitCount === 0 &&
    hameCount === 1 &&
    lenkkaritCount === 0 &&
    mustatlenkkaritCount === 1 &&
    kenkäCount === 0,
    image: asu5,
  info: "Vasemmalla esimerkki miltä asu näyttäisi yhdisteltynä",
},
{
  condition: () =>
  tpaitaCount === 1 &&
  toppiCount === 0 &&
  paitaCount === 0 &&
  farkutCount === 1 &&
  legginssitCount === 0 &&
  hameCount === 0 &&
  lenkkaritCount === 0 &&
  mustatlenkkaritCount === 1 &&
  kenkäCount === 0,
  image: asu6,
info: "Vasemmalla esimerkki miltä asu näyttäisi yhdisteltynä",
},
{
  condition: () =>
  tpaitaCount === 1 &&
  toppiCount === 0 &&
  paitaCount === 0 &&
  farkutCount === 1 &&
  legginssitCount === 0 &&
  hameCount === 0 &&
  lenkkaritCount === 0 &&
  mustatlenkkaritCount === 0 &&
  kenkäCount === 1,
  image: asu7,
info: "Vasemmalla esimerkki miltä asu näyttäisi yhdisteltynä",
},
{
  condition: () =>
  tpaitaCount === 0 &&
  toppiCount === 1 &&
  paitaCount === 0 &&
  farkutCount === 0 &&
  legginssitCount === 1 &&
  hameCount === 0 &&
  lenkkaritCount === 1 &&
  mustatlenkkaritCount === 0 &&
  kenkäCount === 0,
  image: asu8,
info: "Vasemmalla esimerkki miltä asu näyttäisi yhdisteltynä",
},
{
  condition: () =>
  tpaitaCount === 0 &&
  toppiCount === 1 &&
  paitaCount === 0 &&
  farkutCount === 0 &&
  legginssitCount === 1 &&
  hameCount === 0 &&
  lenkkaritCount === 0 &&
  mustatlenkkaritCount === 0 &&
  kenkäCount === 1,
  image: asu9,
info: "Vasemmalla esimerkki miltä asu näyttäisi yhdisteltynä",
},
{
  condition: () =>
  tpaitaCount === 1 &&
  toppiCount === 0 &&
  paitaCount === 0 &&
  farkutCount === 0 &&
  legginssitCount === 1 &&
  hameCount === 0 &&
  lenkkaritCount === 1 &&
  mustatlenkkaritCount === 0 &&
  kenkäCount === 0,
  image: asu10,
info: "Vasemmalla esimerkki miltä asu näyttäisi yhdisteltynä",
},
{
  condition: () =>
  tpaitaCount === 1 &&
  toppiCount === 0 &&
  paitaCount === 0 &&
  farkutCount === 0 &&
  legginssitCount === 1 &&
  hameCount === 0 &&
  lenkkaritCount === 0 &&
  mustatlenkkaritCount === 1 &&
  kenkäCount === 0,
  image: asu11,
info: "Vasemmalla esimerkki miltä asu näyttäisi yhdisteltynä",
},
{
  condition: () =>
  tpaitaCount === 1 &&
  toppiCount === 0 &&
  paitaCount === 0 &&
  farkutCount === 0 &&
  legginssitCount === 1 &&
  hameCount === 0 &&
  lenkkaritCount === 0 &&
  mustatlenkkaritCount === 0 &&
  kenkäCount === 1,
  image: asu12,
info: "Vasemmalla esimerkki miltä asu näyttäisi yhdisteltynä",
},
{
  condition: () =>
  tpaitaCount === 1 &&
  toppiCount === 0 &&
  paitaCount === 0 &&
  farkutCount === 0 &&
  legginssitCount === 0 &&
  hameCount === 1 &&
  lenkkaritCount === 1 &&
  mustatlenkkaritCount === 0 &&
  kenkäCount === 0,
  image: asu13,
info: "Vasemmalla esimerkki miltä asu näyttäisi yhdisteltynä",
},
{
  condition: () =>
  tpaitaCount === 1 &&
  toppiCount === 0 &&
  paitaCount === 0 &&
  farkutCount === 0 &&
  legginssitCount === 0 &&
  hameCount === 1 &&
  lenkkaritCount === 0 &&
  mustatlenkkaritCount === 1 &&
  kenkäCount === 0,
  image: asu14,
info: "Vasemmalla esimerkki miltä asu näyttäisi yhdisteltynä",
},
{
  condition: () =>
  tpaitaCount === 1 &&
  toppiCount === 0 &&
  paitaCount === 0 &&
  farkutCount === 0 &&
  legginssitCount === 0 &&
  hameCount === 1 &&
  lenkkaritCount === 0 &&
  mustatlenkkaritCount === 0 &&
  kenkäCount === 1,
  image: asu15,
info: "Vasemmalla esimerkki miltä asu näyttäisi yhdisteltynä",
},
{
  condition: () =>
  tpaitaCount === 0 &&
  toppiCount === 1 &&
  paitaCount === 0 &&
  farkutCount === 1 &&
  legginssitCount === 0 &&
  hameCount === 0 &&
  lenkkaritCount === 1 &&
  mustatlenkkaritCount === 0 &&
  kenkäCount === 0,
  image: asu16,
info: "Vasemmalla esimerkki miltä asu näyttäisi yhdisteltynä",
},
{
  condition: () =>
  tpaitaCount === 0 &&
  toppiCount === 1 &&
  paitaCount === 0 &&
  farkutCount === 1 &&
  legginssitCount === 0 &&
  hameCount === 0 &&
  lenkkaritCount === 0 &&
  mustatlenkkaritCount === 1 &&
  kenkäCount === 0,
  image: asu17,
info: "Vasemmalla esimerkki miltä asu näyttäisi yhdisteltynä",
},
{
  condition: () =>
  tpaitaCount === 0 &&
  toppiCount === 1 &&
  paitaCount === 0 &&
  farkutCount === 1 &&
  legginssitCount === 0 &&
  hameCount === 0 &&
  lenkkaritCount === 0 &&
  mustatlenkkaritCount === 0 &&
  kenkäCount === 1,
  image: asu18,
info: "Vasemmalla esimerkki miltä asu näyttäisi yhdisteltynä",
},
{
    condition: () =>
    tpaitaCount === 0 &&
    toppiCount === 1 &&
    paitaCount === 0 &&
    farkutCount === 0 &&
    legginssitCount === 0 &&
    hameCount === 1 &&
    lenkkaritCount === 1 &&
    mustatlenkkaritCount === 0 &&
    kenkäCount === 0,
    image: asu19,
  info: "Vasemmalla esimerkki miltä asu näyttäisi yhdisteltynä",
  },
  {
    condition: () =>
    tpaitaCount === 0 &&
    toppiCount === 1 &&
    paitaCount === 0 &&
    farkutCount === 0 &&
    legginssitCount === 0 &&
    hameCount === 1 &&
    lenkkaritCount === 0 &&
    mustatlenkkaritCount === 1 &&
    kenkäCount === 0,
    image: asu20,
  info: "Vasemmalla esimerkki miltä asu näyttäisi yhdisteltynä",
  },
{
    condition: () =>
    tpaitaCount === 0 &&
    toppiCount === 1 &&
    paitaCount === 0 &&
    farkutCount === 0 &&
    legginssitCount === 0 &&
    hameCount === 1 &&
    lenkkaritCount === 0 &&
    mustatlenkkaritCount === 0 &&
    kenkäCount === 1,
    image: asu21,
  info: "Vasemmalla esimerkki miltä asu näyttäisi yhdisteltynä",
  },
  {
    condition: () =>
    tpaitaCount === 0 &&
    toppiCount === 0 &&
    paitaCount === 1 &&
    farkutCount === 1 &&
    legginssitCount === 0 &&
    hameCount === 0 &&
    lenkkaritCount === 1 &&
    mustatlenkkaritCount === 0 &&
    kenkäCount === 0,
    image: asu22,
  info: "Vasemmalla esimerkki miltä asu näyttäisi yhdisteltynä",
  },
  {
    condition: () =>
    tpaitaCount === 0 &&
    toppiCount === 0 &&
    paitaCount === 1 &&
    farkutCount === 1 &&
    legginssitCount === 0 &&
    hameCount === 0 &&
    lenkkaritCount === 0 &&
    mustatlenkkaritCount === 1 &&
    kenkäCount === 0,
    image: asu23,
  info: "Vasemmalla esimerkki miltä asu näyttäisi yhdisteltynä",
  },
  {
    condition: () =>
    tpaitaCount === 0 &&
    toppiCount === 0 &&
    paitaCount === 1 &&
    farkutCount === 1 &&
    legginssitCount === 0 &&
    hameCount === 0 &&
    lenkkaritCount === 0 &&
    mustatlenkkaritCount === 0 &&
    kenkäCount === 1,
    image: asu24,
  info: "Vasemmalla esimerkki miltä asu näyttäisi yhdisteltynä",
  },
  {
    condition: () =>
    tpaitaCount === 0 &&
    toppiCount === 0 &&
    paitaCount === 1 &&
    farkutCount === 0 &&
    legginssitCount === 1 &&
    hameCount === 0 &&
    lenkkaritCount === 1 &&
    mustatlenkkaritCount === 0 &&
    kenkäCount === 0,
    image: asu25,
  info: "Vasemmalla esimerkki miltä asu näyttäisi yhdisteltynä",
  },
  {
    condition: () =>
    tpaitaCount === 0 &&
    toppiCount === 0 &&
    paitaCount === 1 &&
    farkutCount === 0 &&
    legginssitCount === 1 &&
    hameCount === 0 &&
    lenkkaritCount === 0 &&
    mustatlenkkaritCount === 1 &&
    kenkäCount === 0,
    image: asu26,
  info: "jotain Vasemmalla esimerkki miltä asu näyttäisi yhdisteltynä ja kaikkee",
  },
  {
    condition: () =>
    tpaitaCount === 0 &&
    toppiCount === 0 &&
    paitaCount === 1 &&
    farkutCount === 0 &&
    legginssitCount === 1 &&
    hameCount === 0 &&
    lenkkaritCount === 0 &&
    mustatlenkkaritCount === 0 &&
    kenkäCount === 1,
    image: asu27,
  info: "Vasemmalla esimerkki miltä asu näyttäisi yhdisteltynä",
  },
  ]; 


  export default getImageConditions;