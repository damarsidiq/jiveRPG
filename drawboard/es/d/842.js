var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Conjuros';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 842;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/paper-3204064_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 714px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 149px; left: 393px; font-size: 19px; font-family: SourceSansProLight;">El mago pronunció antiguos conjuros en voz baja.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 265px; left: 392px; font-size: 17px; font-family: OpenSansItalic;">Creían que los conjuros podían alejar el mal.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 406px; left: 396px; font-family: Ubuntu_condensed; font-size: 21px;">En el libro se describían varios conjuros protectores.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 640px; left: 765px; font-size: 51px; font-family: Amatic_bold;">Conjuros</div>`;
vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 149px; left: 392px; font-size: 20px; font-family: SourceSansProLight;">The magician uttered ancient spells in a low voice.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 265px; left: 391px; font-size: 17px; font-family: OpenSansItalic;">They believed that the incantations could ward off evil.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 406px; left: 395px; font-family: Ubuntu_condensed; font-size: 20px;">The book described several protective spells.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="width: 390px; white-space: normal; top: 632px; left: 703px; font-size: 20px; font-family: OpenSansLight;">Spells or incantations.</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}