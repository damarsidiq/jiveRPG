var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Mariscos';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 803;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/drawing-pad-1209781_1280.jpg';
var dbbg= `<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height:720px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';
vt[vt.length]=`<div id="text_14" class="textshirt mergershirt copytopaste" style="top: 182px; left: 209px; font-size: 31px; font-family: NotoSans_Condensed_LightItalic; color: rgb(0, 114, 3);">El restaurante es famoso por sus mariscos frescos.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt copytopaste" style="top: 313px; left: 212px; font-size: 24px; font-family: NotoSans_Light; color: rgb(7, 9, 7);">Preparó una sopa de mariscos para la cena.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt copytopaste" style="top: 438px; left: 216px; font-family: OpenSansSemiboldItalic; font-size: 24px; color: rgb(29, 52, 32);">No come mariscos porque es alérgico.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt copytopaste" style="top: 619px; left: 846px; font-size: 63px; font-family: Amatic_bold; color: rgb(1, 37, 2);">Mariscos</div>`;

vte[vte.length]=`<div id="text_19" class="textshirt mergershirt`+transws+`" style="top: 182px; left: 209px; font-size: 26px; font-family: NotoSans_Condensed_Italic; color: rgb(0, 114, 3);">The restaurant is famous for its fresh seafood.</div>`;
vte[vte.length]=`<div id="text_20" class="textshirt mergershirt`+transws+`" style="top: 313px; left: 212px; font-size: 24px; font-family: OswaldLight; color: rgb(24, 45, 23);">She prepared a seafood soup for dinner.</div>`;
vte[vte.length]=`<div id="text_21" class="textshirt mergershirt`+transws+`" style="top: 438px; left: 216px; font-family: OpenSansSemiboldItalic; font-size: 22px; color: rgb(24, 45, 23);">He does not eat shellfish because he is allergic.</div>`;
vte[vte.length]=`<div id="text_22" class="textshirt mergershirt`+transws+`" style="width: 390px; white-space: normal; top: 606px; left: 819px; font-size: 20px; font-family: OswaldLight; color: rgb(0, 0, 0);">Seafood or shellfish.</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}