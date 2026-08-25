var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
const bimgpath = storyline.jsonUrl+'./drawboard/bimg/drawing-pad-1209781_1280.jpg';
export const dbtitle = 'Hilo';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 35;

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;
var dbbg= `<div id="dbbackg" class="textshirt imageshirt" style="top: 0px; left: 0px; width: 1280px; height: 720px;"><img src="`+bimgpath+`" style=""></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 163px; left: 244px; font-size: 44px; font-family: Amatic; color: rgb(0, 0, 0);">Necesito aguja e 'hilo' para coser este botón</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 294px; left: 247px; font-size: 29px; font-family: AvenirBook; color: rgb(0, 0, 0);">La araña tejió su red con un hilo muy fino</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 419px; left: 251px; font-family: OpenSansSemiboldItalic; font-size: 24px; color: rgb(0, 0, 0);">Perdí el hilo de la conversación porque me distraje</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt grabbing" style="top: 586px; left: 888px; font-size: 46px; font-family: Amatic_bold; color: rgb(0, 0, 0);">Hilo</div>`;


vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 163px; left: 244px; font-size: 44px; font-family: Amatic; color: rgb(0, 0, 0);">I need a needle and 'thread' to sew this button</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 294px; left: 247px; font-size: 29px; font-family: AvenirBook; color: rgb(0, 0, 0);">The spider wove its web with a very fine thread</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 419px; left: 251px; font-family: OpenSansSemiboldItalic; font-size: 24px; color: rgb(0, 0, 0);">I lost the thread of the conversation because I got distracted</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 588px; left: 795px; font-size: 46px; font-family: Amatic_bold; color: rgb(0, 0, 0);">thread (as fiber)</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
