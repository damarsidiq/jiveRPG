var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Estanca';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 316;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/black-1072366_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 727px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#fff;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 124px; left: 198px; font-size: 42px; font-family: Amatic; color: rgb(255, 255, 255);">La falta de inversión estanca el crecimiento económico.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 258px; left: 206px; font-size: 18px; font-family: AvenirBook; color: rgb(255, 255, 255);">El agua se estanca después de una fuerte lluvia.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 392px; left: 208px; font-family: OpenSansSemiboldItalic; font-size: 18px; color: rgb(255, 255, 255);">Esta situación estanca el desarrollo de la empresa.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 493px; left: 840px; font-size: 62px; font-family: Amatic_bold; color: rgb(255, 255, 255);">Estanca; estancar(se)</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 124px; left: 198px; font-size: 42px; font-family: Amatic; color: rgb(255, 255, 255);">The lack of investment stagnates economic growth.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 258px; left: 206px; font-size: 18px; font-family: AvenirBook; color: rgb(255, 255, 255);">The water becomes stagnant after heavy rain.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 392px; left: 208px; font-family: OpenSansSemiboldItalic; font-size: 18px; color: rgb(255, 255, 255);">This situation stagnates the company's development.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 512px; left: 683px; font-size: 31px; font-family: Amatic_bold; color: rgb(255, 255, 255);">Stagnates, causes to stagnate, becomes stagnant — from estancar.</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}