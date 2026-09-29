var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'ascetas';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 994;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notepad-3297994_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width:1280px;height:727px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="width: 500px; white-space: normal; top: 67px; left: 635px; font-family: BarlowLight; font-size: 21px;">El cantante vivía como un asceta en un palacio en medio de la nada.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="width: 500px; white-space: normal; top: 189px; left: 635px; font-size: 20px; font-family: BarlowExtraLightItalic;">Muchos ascetas viven en la ciudad, toman un trago del río cada mañana, antes de pasar el día en sus varias prácticas y rituales.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="width: 500px; white-space: normal; top: 326px; left: 632px; font-size: 23px; font-family: NotoSans_Condensed_ExtraLightItalic;">No era en absoluto un asceta —tales hombres, de hecho, rara vez lo son— ni era especialmente devoto.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 575px; left: 996px; font-size: 49px; font-family: Amatic_bold;">ascetas</div>`;
vte[vte.length]=`<div id="text_19" class="textshirt mergershirt`+transws+`" style="width: 500px; white-space: normal; top: 75px; left: 634px; font-size: 17px; font-family: MontserratLightItalic;">The singer lived like an ascetic in a palace in the middle of nowhere.</div>`;
vte[vte.length]=`<div id="text_20" class="textshirt mergershirt`+transws+`" style="width: 500px; white-space: normal; top: 180px; left: 634px; font-size: 14px; font-family: NotoSans_LightItalic;">Many ascetics live in the city, taking a sip from the river each morning before spending the day engaged in their various practices and rituals.</div>`;
vte[vte.length]=`<div id="text_21" class="textshirt mergershirt`+transws+`" style="width: 500px; white-space: normal; top: 292px; left: 637px; font-family: Ubuntu_semi-light_italic; font-size: 16px;">He was not an ascetic at all—such men, in fact, rarely are—nor was he particularly devout.</div>`;
vte[vte.length]=`<div id="text_22" class="textshirt mergershirt`+transws+`" style="width: 464px; white-space: normal; top: 532px; left: 658px; font-size: 15px; font-family: SourceSansProRegular; height: 90px;">Ascetics. These are people who dedicate their lives to following contemplative ideals, often practicing self-discipline, abstinence, or self-mortification, frequently for religious reasons.</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}