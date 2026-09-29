var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'trepar';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 1056;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/paper-3204064_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 714px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="max-width: 517px; white-space: normal; top: 149px; left: 393px; font-size: 20px; font-family: SourceSansProLight;">Los niños aprendieron a trepar a los árboles en el parque.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="max-width: 517px; white-space: normal; top: 265px; left: 392px; font-size: 18px; font-family: OpenSansItalic;">Tuve que trepar por la cerca para recuperar la pelota.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="max-width: 517px; white-space: normal; top: 406px; left: 396px; font-family: Ubuntu_condensed; font-size: 21px;">La hiedra empezó a trepar por la pared de la casa.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 642px; left: 801px; font-size: 51px; font-family: Amatic_bold;">trepar</div>`;
vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="max-width: 517px; white-space: normal; top: 149px; left: 392px; font-size: 20px; font-family: SourceSansProLight;">The children learned to climb trees in the park.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="max-width: 517px; white-space: normal; top: 265px; left: 391px; font-size: 18px; font-family: OpenSansItalic;">I had to climb over the fence to get the ball back.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="max-width: 517px; white-space: normal; top: 406px; left: 395px; font-family: Ubuntu_condensed; font-size: 20px;">The ivy began to climb up the wall of the house.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="max-width: 517px; white-space: normal; top: 517px; left: 392px; font-size: 20px; font-family: OpenSansLight;">to climb, to clamber. Verb. Action of climbing up something using hands and feet, often with effort. Used for people, animals, and climbing plants.</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}