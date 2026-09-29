var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'pasaje';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 1008;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notepad-3297994_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width:1280px;height:727px;top:-37px;left:3px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="width: 500px; white-space: normal; top: 67px; left: 635px; font-family: BarlowLight; font-size: 21px;">Leí un pasaje interesante de ese libro.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="width: 500px; white-space: normal; top: 189px; left: 635px; font-size: 20px; font-family: BarlowExtraLightItalic;">El pasaje del autobús cuesta dos euros.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="width: 500px; white-space: normal; top: 326px; left: 632px; font-size: 23px; font-family: NotoSans_Condensed_ExtraLightItalic;">El guía nos mostró un pasaje secreto debajo del castillo.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 574px; left: 969px; font-size: 49px; font-family: Amatic_bold;">pasaje</div>`;
vte[vte.length]=`<div id="text_19" class="textshirt mergershirt`+transws+`" style="width: 500px; white-space: normal; top: 75px; left: 631px; font-size: 17px; font-family: MontserratLightItalic;">I read an interesting passage from that book.</div>`;
vte[vte.length]=`<div id="text_20" class="textshirt mergershirt`+transws+`" style="width: 500px; white-space: normal; top: 180px; left: 625px; font-size: 14px; font-family: NotoSans_LightItalic;">The bus fare costs two euros.</div>`;
vte[vte.length]=`<div id="text_21" class="textshirt mergershirt`+transws+`" style="width: 500px; white-space: normal; top: 292px; left: 628px; font-family: Ubuntu_semi-light_italic; font-size: 16px;">The guide showed us a secret passage beneath the castle.</div>`;
vte[vte.length]=`<div id="text_22" class="textshirt mergershirt`+transws+`" style="width: 464px; white-space: normal; top: 532px; left: 629px; font-size: 15px; font-family: SourceSansProRegular; height: 90px;">Passage, excerpt, ticket, or fare. It can refer to a section of a text, a route or corridor, or the cost of traveling by public transportation.</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}