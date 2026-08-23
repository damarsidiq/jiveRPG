var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
const bimgpath = storyline.jsonUrl+'./drawboard/bimg/drawing-pad-1209781_1280.jpg';
export const dbtitle = 'Alivian';
const defaultspeed = 25;
const drabindex = 12;
const transws = ' wspeed_10';

var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`" style=""></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 192px; left: 223px; font-size: 21px; font-family: FuturaMediumItalic; color: rgb(210, 110, 15);">Los masajes 'alivian' el dolor de espalda después de un día largo de trabajo.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 318px; left: 237px; font-size: 21px; font-family: Gotham; color: rgb(12, 84, 17);">Las palabras de su madre 'alivian' su ansiedad antes del examen.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 441px; left: 202px; font-family: Museo_Slab_500italic; font-size: 20px; color: rgb(8, 91, 109);">Estas políticas fiscales 'alivian' la carga económica de las familias de bajos recursos.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 590px; left: 876px; font-size: 34px; font-family: Museo_Slab_100italic;">Alivian</div>`;


vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 192px; left: 223px; font-size: 21px; font-family: FuturaMediumItalic; color: rgb(210, 110, 15);">The massages 'relieve' back pain after a long workday.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 318px; left: 237px; font-size: 21px; font-family: Gotham; color: rgb(12, 84, 17);">Her mother's words relieve her anxiety before the exam.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 441px; left: 202px; font-family: Museo_Slab_500italic; font-size: 20px; color: rgb(8, 91, 109);">These tax policies relieve the economic burden on low-income families.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 590px; left: 814px; font-size: 34px; font-family: Museo_Slab_100italic;">they relieve</div>`;



dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
