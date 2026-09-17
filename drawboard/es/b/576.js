var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'colocó';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 576;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/stickies-725930.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 854px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_53" class="textshirt mergershirt" style="top: 221px; left: 434px; font-size: 17px; font-family: MetropolLightLight; transform: rotate(-2deg);">Ella colocó el jarrón en el centro de la mesa.</div>`;
vt[vt.length]=`<div id="text_54" class="textshirt mergershirt" style="top: 315px; left: 441px; font-size: 17px; font-family: MetropolLightLight; transform: rotate(-2deg);">El director colocó al actor principal en primera fila.</div>`;
vt[vt.length]=`<div id="text_55" class="textshirt mergershirt" style="top: 397px; left: 444px; font-family: OpenSansSemiboldItalic; font-size: 15px; transform: rotate(-2deg);">Colocó su confianza en el equipo equivocado.</div>`;
vt[vt.length]=`<div id="text_56" class="textshirt mergershirt" style="top: 580px; left: 751px; font-size: 49px; font-family: Amatic_bold; transform: rotate(-2deg);">colocó</div>`;
vte[vte.length]=`<div id="text_53" class="textshirt mergershirt`+transws+`" style="top: 221px; left: 434px; font-size: 18px; font-family: MetropolLightLight; transform: rotate(-2deg);">She placed the vase in the center of the table.</div>`;
vte[vte.length]=`<div id="text_54" class="textshirt mergershirt`+transws+`" style="top: 315px; left: 441px; font-size: 17px; font-family: MetropolLightLight; transform: rotate(-2deg);">The director placed the lead actor in the front row.</div>`;
vte[vte.length]=`<div id="text_55" class="textshirt mergershirt`+transws+`" style="top: 397px; left: 446px; font-family: OpenSansSemiboldItalic; font-size: 18px; transform: rotate(-2deg);">He placed his trust in the wrong team.</div>`;
vte[vte.length]=`<div id="text_56" class="textshirt mergershirt`+transws+`" style="width: 398px; white-space: normal; top: 507px; left: 452px; font-size: 17px; font-family: MetropolLightItalic; transform: rotate(-2deg);">He/she placed; put; positioned — (Third person singular preterite of *colocar*) To put something in a particular position; to arrange or set something in place; to invest or place trust.</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}