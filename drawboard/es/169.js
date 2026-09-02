var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Videntes';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 169;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notebook-2637757_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 191px; left: 454px; font-size: 14px; font-family: AvenirLight;">Los 'videntes' afirmaron que el futuro era incierto</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 287px; left: 453px; font-size: 14px; font-family: AvenirBook;">Muchos 'videntes' ofrecen sus servicios por internet</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 404px; left: 454px; font-family: OpenSansSemiboldItalic; font-size: 13px;">Los 'videntes' no siempre aciertan en sus predicciones</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 588px; left: 690px; font-size: 35px; font-family: Amatic_bold;">Videntes</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 191px; left: 454px; font-size: 14px; font-family: AvenirLight;">The seers claimed that the future was uncertain</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 287px; left: 453px; font-size: 14px; font-family: AvenirBook;">Many clairvoyants offer their services online</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 404px; left: 454px; font-family: OpenSansSemiboldItalic; font-size: 13px;">Seers don't always get their predictions right</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 589px; left: 451px; font-size: 29px; font-family: Amatic_bold;">seers; clairvoyants; visionaries (plural)</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}