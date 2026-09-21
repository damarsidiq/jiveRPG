var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Picante';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 827;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/paper-3204064_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 714px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 149px; left: 393px; font-size: 20px; font-family: SourceSansProLight;">La salsa era demasiado picante para su gusto.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 265px; left: 392px; font-size: 17px; font-family: OpenSansItalic;">Prefiere la comida picante a los platos suaves.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 406px; left: 396px; font-family: Ubuntu_condensed; font-size: 21px;">Añadió un poco de chile para hacer el guiso más picante.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 636px; left: 778px; font-size: 51px; font-family: Amatic_bold;">Picante</div>`;
vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 149px; left: 392px; font-size: 20px; font-family: SourceSansProLight;">The sauce was too spicy for his taste.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 265px; left: 391px; font-size: 17px; font-family: OpenSansItalic;">She prefers spicy food to mild dishes.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 406px; left: 395px; font-family: Ubuntu_condensed; font-size: 18px;">He added a little chili to make the stew spicier.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="width: 390px; white-space: normal; top: 637px; left: 581px; font-size: 20px; font-family: OpenSansLight;">Spicy or hot (in flavor); also sharp or pungent.</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}