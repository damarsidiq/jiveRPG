var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'locura';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 1057;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/paper-3204064_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 714px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="max-width: 517px; white-space: normal; top: 149px; left: 393px; font-size: 20px; font-family: SourceSansProLight;">Fue una locura conducir tantas horas sin descanso.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="max-width: 517px; white-space: normal; top: 265px; left: 392px; font-size: 18px; font-family: OpenSansItalic;">Su amor por la música es una hermosa locura.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="max-width: 517px; white-space: normal; top: 406px; left: 396px; font-family: Ubuntu_condensed; font-size: 21px;">La locura se apoderó de la multitud durante el concierto.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 642px; left: 801px; font-size: 51px; font-family: Amatic_bold;">locura</div>`;
vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="max-width: 517px; white-space: normal; top: 149px; left: 392px; font-size: 20px; font-family: SourceSansProLight;">It was madness to drive so many hours without rest.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="max-width: 517px; white-space: normal; top: 265px; left: 391px; font-size: 18px; font-family: OpenSansItalic;">His love for music is a beautiful madness.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="max-width: 517px; white-space: normal; top: 406px; left: 395px; font-family: Ubuntu_condensed; font-size: 20px;">Madness took over the crowd during the concert.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="max-width: 517px; white-space: normal; top: 517px; left: 392px; font-size: 20px; font-family: OpenSansLight;">madness, insanity, craziness. Noun. Refers to a state of mental derangement, or colloquially to a foolish, reckless, or extremely extravagant act or idea.</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}